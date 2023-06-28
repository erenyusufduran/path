"use strict";

const { Wallets } = require("fabric-network");
const path = require("path");
const FabricCaServices = require("fabric-ca-client");
const fs = require("fs");
const FabricCAServices = require("fabric-ca-client");

const getCCP = async (org) => {
  let ccpPath;
  org === "Org1" ? (ccpPath = path.resolve(__dirname, "..", "config", "connection-org1.json")) : null;
  org === "Org2" ? (ccpPath = path.resolve(__dirname, "..", "config", "connection-org2.json")) : null;
  org === "Org3" ? (ccpPath = path.resolve(__dirname, "..", "config", "connection-org3.json")) : null;
  const ccpJSON = fs.readFileSync(ccpPath, "utf-8");
  const ccp = JSON.parse(ccpJSON);
  return ccp;
};

const getCaURL = async (org, ccp) => {
  let caURL;
  org === "Org1" ? (caURL = ccp.certificateAuthorities["ca.org1.example.com"].url) : null;
  org === "Org2" ? (caURL = ccp.certificateAuthorities["ca.org2.example.com"].url) : null;
  org === "Org3" ? (caURL = ccp.certificateAuthorities["ca.org3.example.com"].url) : null;
  return caURL;
};

const getWalletPath = async (org) => {
  let walletPath;
  org === "Org1" ? (walletPath = path.join(process.cwd(), "org1-wallet")) : null;
  org === "Org2" ? (walletPath = path.join(process.cwd(), "org2-wallet")) : null;
  org === "Org3" ? (walletPath = path.join(process.cwd(), "org3-wallet")) : null;
  return walletPath;
};

const getAffilliation = async (org) => {
  return org === "Org1" ? "org1.department1" : "org2.department1";
};

const getRegisteredUser = async (username, userOrg) => {
  let ccp = await getCCP(userOrg);
  const caURL = await getCaURL(userOrg, ccp);
  console.log("Ca URL is", caURL);
  const ca = new FabricCaServices(caURL);

  const walletPath = await getWalletPath(userOrg);
  const wallet = await Wallets.newFileSystemWallet(walletPath);
  console.log(`Wallet path: ${walletPath}`);

  const userIdentity = await wallet.get(username);
  if (userIdentity) {
    console.log(`An identity for the user ${username} already exists in the wallet`);
    return { success: true, message: username + " enrolled successfully" };
  }

  let adminIdentity = await wallet.get("admin");
  if (!adminIdentity) {
    console.log('An identity for the admin user "admin" does not exist in the wallet');
    await enrollAdmin(userOrg, ccp);
    adminIdentity = await wallet.get("admin");
    console.log("Admin Enrolled Successfully");
  }

  const provider = wallet.getProviderRegistry().getProvider(adminIdentity.type);
  const adminUser = await provider.getUserContext(adminIdentity, "admin");
  let secret;
  try {
    secret = await ca.register({
      affiliation: await getAffilliation(userOrg),
      enrollmentID: username,
      role: "client",
      adminUser,
    });
    console.log(`Secret for the user with username: ${username} -------> ${secret}`);
  } catch (error) {
    return error.message;
  }

  const enrollment = await ca.enroll({ enrollmentID: username, enrollmentSecret: secret });
  const x509Identity = {
    credentials: {
      certificate: enrollment.certificate,
      privateKey: enrollment.key.toBytes(),
    },
    mspId: `${userOrg}MSP`,
    type: "X.509",
  };
  await wallet.put(username, x509Identity);
  console.log(`Successfully registered and enrolled admin user ${username} and imported it into the wallet`);
  return { success: true, message: username + " enrolled Successfully" };
};

const isUserRegistered = async (username, userOrg) => {
  const walletPath = await getWalletPath(userOrg);
  const wallet = await Wallets.newFileSystemWallet(walletPath);
  console.log(`Wallet path: ${walletPath}`);

  const userIdentity = await wallet.get(username);
  if (userIdentity) {
    console.log(`An identity for the user ${username} exists in the wallet`);
    return true;
  }
  return false;
};

const getCaInfo = async (org, ccp) => {
  let caInfo;
  org === "Org1" ? (caInfo = ccp.certificateAuthorities["ca.org1.example.com"]) : null;
  org === "Org2" ? (caInfo = ccp.certificateAuthorities["ca.org2.example.com"]) : null;
  org === "Org3" ? (caInfo = ccp.certificateAuthorities["ca.org3.example.com"]) : null;
  return caInfo;
};

const getOrgMSP = (org) => {
  let orgMSP;
  org === "Org1" ? (orgMSP = "Org1MSP") : null;
  org === "Org2" ? (orgMSP = "Org2MSP") : null;
  org === "Org3" ? (orgMSP = "Org3MSP") : null;
  return orgMSP;
};

const enrollAdmin = async (org, ccp) => {
  console.log("Calling enroll admin method");
  try {
    const caInfo = await getCaInfo(org, ccp);
    const caTLSCACerts = caInfo.tlsCACerts.pem;
    const ca = new FabricCAServices(caInfo.url, { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

    const walletPath = await getWalletPath(org);
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    console.log(`Wallet path: ${walletPath}`);

    const identity = await wallet.get("admin");
    if (identity) {
      console.log('An identity for the admin user "admin" already exists in the wallet');
      return;
    }

    const enrollment = await ca.enroll({ enrollmentID: "admin", enrollmentSecret: "adminpw" });
    console.log("Enrollment object is: ", enrollment);
    const x509Identity = {
      credentials: {
        certificate: enrollment.certificate,
        privateKey: enrollment.key.toBytes(),
      },
      mspId: `${org}MSP`,
      type: "X.509",
    };
    await wallet.put("admin", x509Identity);
    console.log('Successfully enrolled admin user "admin" and imported it into the wallet');
    return;
  } catch (error) {
    console.error(`Failed to enroll admin user "admin": ${error}`);
  }
};

const registerAndGetSecret = async (username, userOrg) => {
  const ccp = await getCCP(userOrg);
  const caURL = await getCaURL(userOrg, ccp);
  const ca = new FabricCaServices(caURL);

  const walletPath = await getWalletPath(userOrg);
  const wallet = await Wallets.newFileSystemWallet(walletPath);
  console.log(`Wallet path: ${walletPath}`);

  const userIdentity = await wallet.get(username);
  if (userIdentity) {
    console.log(`An identity for the user ${username} already exists in the wallet`);
    return { success: true, message: username + " enrolled successfully" };
  }

  // build a user object for authentication with CA
  const provider = wallet.getProviderRegistry().getProvider(adminIdentity.type);
  const adminUser = await provider.getUserContext(adminIdentity, "admin");
  let secret;
  try {
    secret = await ca.register(
      { affiliation: await getAffilliation(userOrg), enrollmentID: username, role: "client" },
      adminUser
    );
    const enrollment = await ca.enroll({ enrollmentID: username, enrollmentSecret: secret });
    const orgMSPID = getOrgMSP(userOrg);
    const x509Identity = {
      credentials: { certificate: enrollment.certificate, privateKey: enrollment.key.toBytes() },
      mspId: orgMSPID,
      type: "X.509",
    };
    await wallet.put(username, x509Identity);
    return { success: true, message: username + " enrolled successfully", secret };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getCCP,
  getWalletPath,
  getRegisteredUser,
  isUserRegistered,
  registerAndGetSecret,
};
