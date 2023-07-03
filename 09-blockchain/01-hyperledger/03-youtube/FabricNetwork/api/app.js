"use strict";
const log4js = require("log4js");
const logger = log4js.getLogger("BasicNetwork");
const bodyParser = require("body-parser");
const http = require("http");
const util = require("util");
const express = require("express");
const { expressjwt: expJWT } = require("express-jwt");
const jwt = require("jsonwebtoken");
const bearerToken = require("express-bearer-token");
const cors = require("cors");
const constants = require("./config/constants.json");

const host = process.env.HOST || constants.host;
const port = process.env.PORT || constants.port;

const helper = require("./app/helper");
const invoke = require("./app/invoke");
const query = require("./app/query");
const qscc = require("./app/qscc");

const app = express();

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// set secret variable
app.set("secret", "thisismysecret");
app.use(
  expJWT({
    secret: "thisismysecret",
    algorithms: ["HS256"],
  }).unless({
    path: ["/users", "/users/login", "/register"],
  })
);
app.use(bearerToken());

logger.level = "debug";

app.use(async (req, res, next) => {
  logger.debug("New req for %s", req.originalUrl);
  if (
    req.originalUrl.indexOf("/users") >= 0 ||
    req.originalUrl.indexOf("/users/login") >= 0 ||
    req.originalUrl.indexOf("/register") >= 0
  ) {
    return next();
  }
  const token = req.token;
  if (token) {
    const decoded = jwt.verify(token, "thisismysecret");
    req.username = decoded.username;
    req.orgName = decoded.orgName;
    logger.debug(util.format(`Decoded from JWT token. Username: ${decoded.username}, Orgname: ${decoded.orgName}`));
    next();
  } else {
    return res.send({
      success: false,
      message: "Failed to auth token. Make sure to include the token.",
    });
  }
});

const server = http.createServer(app).listen(port, () => console.log(`Server started on ${port}`));
logger.info("**************** Server Started *****************");
logger.info(`***************** http://${host}:${port} *******************`);
server.timeout = 240000;

function getErrorMessage(field) {
  return { success: false, message: field + " field is missing or invalid in the request" };
}

// Register and enroll user
app.post("/users", async (req, res) => {
  const username = req.body.username;
  const orgName = req.body.orgName;
  logger.debug("End point : /users");
  logger.debug("User name : " + username);
  logger.debug("Org name  : " + orgName);
  if (!username) {
    res.json(getErrorMessage("'username'"));
    return;
  }
  if (!orgName) {
    res.json(getErrorMessage("'orgName'"));
    return;
  }

  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
      username: username,
      orgName: orgName,
    },
    app.get("secret")
  );
  const response = await helper.getRegisteredUser(username, orgName, true);
  logger.debug("-- returned from registering the username %s for organization %s", username, orgName);
  if (response && typeof response !== "string") {
    logger.debug("Successfully registered the username %s for organization %s", username, orgName);
    response.token = token;
    res.json(response);
  } else {
    logger.debug("Failed to register the username %s for organization %s with::%s", username, orgName, response);
    res.json({ success: false, message: response });
  }
});

// Register and enroll user and get secret
app.post("/register", async (req, res) => {
  const username = req.body.username;
  const orgName = req.body.orgName;
  logger.debug("End point : /users");
  logger.debug("User name : " + username);
  logger.debug("Org name  : " + orgName);
  if (!username) {
    res.json(getErrorMessage("'username'"));
    return;
  }
  if (!orgName) {
    res.json(getErrorMessage("'orgName'"));
    return;
  }

  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
      username: username,
      orgName: orgName,
    },
    app.get("secret")
  );

  const response = await helper.registerAndGetSecret(username, orgName);
  logger.debug("-- returned from registering the username %s for organization %s", username, orgName);
  if (response && typeof response !== "string") {
    logger.debug("Successfully registered the username %s for organization %s", username, orgName);
    response.token = token;
    res.json(response);
  } else {
    logger.debug("Failed to register the username %s for organization %s with::%s", username, orgName, response);
    res.json({ success: false, message: response });
  }
});

// Login and get jwt
app.post("/users/login", async (req, res) => {
  const username = req.body.username;
  const orgName = req.body.orgName;
  logger.debug("End point : /users");
  logger.debug("User name : " + username);
  logger.debug("Org name  : " + orgName);
  if (!username) {
    res.json(getErrorMessage("'username'"));
    return;
  }
  if (!orgName) {
    res.json(getErrorMessage("'orgName'"));
    return;
  }

  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + parseInt(constants.jwt_expiretime),
      username: username,
      orgName: orgName,
    },
    app.get("secret")
  );

  const isUserRegistered = await helper.isUserRegistered(username, orgName);
  if (isUserRegistered) {
    res.json({ success: true, message: { token } });
  } else {
    res.json({
      success: false,
      message: `User with username ${username} is not registered with ${orgName}. Please register first`,
    });
  }
});

// Invoke transaction on chaincode on target peers
app.post("/channels/:channelName/chaincodes/:chaincodeName", async (req, res) => {
  try {
    logger.debug("==================== INVOKE ON CHAINCODE ==================");
    const peers = req.body.peers;
    const chaincodeName = req.params.chaincodeName;
    const channelName = req.params.channelName;
    const fcn = req.body.fcn;
    const args = req.body.args;
    logger.debug("channelName  : " + channelName);
    logger.debug("chaincodeName : " + chaincodeName);
    logger.debug("fcn  : " + fcn);
    logger.debug("args  : " + args);
    if (!chaincodeName) {
      res.json(getErrorMessage("'chaincodeName'"));
      return;
    }
    if (!channelName) {
      res.json(getErrorMessage("'channelName'"));
      return;
    }
    if (!fcn) {
      res.json(getErrorMessage("'fcn'"));
      return;
    }
    if (!args) {
      res.json(getErrorMessage("'args'"));
      return;
    }

    const message = await invoke.invokeTransaction(channelName, chaincodeName, fcn, args, req.username, req.orgName);
    console.log(`message result is : ${message}`);
    res.send({ result: message, error: null, errorData: null });
  } catch (error) {
    res.send({ result: null, error: error.name, errorData: error.message });
  }
});

app.get("/channels/:channelName/chaincodes/:chaincodeName", async (req, res) => {
  try {
    logger.debug("==================== QUERY BY CHAINCODE ==================");

    const channelName = req.params.channelName;
    const chaincodeName = req.params.chaincodeName;
    console.log(`chaincode name is :${chaincodeName}`);
    let args = req.query.args;
    let fcn = req.query.fcn;
    let peer = req.query.peer;

    logger.debug("channelName : " + channelName);
    logger.debug("chaincodeName : " + chaincodeName);
    logger.debug("fcn : " + fcn);
    logger.debug("args : " + args);

    if (!chaincodeName) {
      res.json(getErrorMessage("'chaincodeName'"));
      return;
    }
    if (!channelName) {
      res.json(getErrorMessage("'channelName'"));
      return;
    }
    if (!fcn) {
      res.json(getErrorMessage("'fcn'"));
      return;
    }
    if (!args) {
      res.json(getErrorMessage("'args'"));
      return;
    }
    console.log("args==========", args);
    args = args.replace(/'/g, '"');
    args = JSON.parse(args);
    logger.debug(args);
    const message = await query.query(channelName, chaincodeName, args, fcn, req.username, req.orgName);
    res.send({ result: message, error: null, errorData: null });
  } catch (error) {
    res.send({ result: null, error: error.name, errorData: error.message });
  }
});
