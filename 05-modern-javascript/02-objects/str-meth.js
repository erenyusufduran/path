let _name = "  Eren Yusuf Duran";

console.log(_name.length);
console.log(_name.toUpperCase());
console.log(_name.toLowerCase());

console.log(_name);

console.log("-------------");

let password = "abc123password098";
console.log(password.includes("password"));

console.log("------------");

console.log(_name.trim());

function isValidPassword(_password) {
  if (password.length < 9) return Error("Message length is not enough");
  return _password.includes("password");
}

console.log(isValidPassword("pasdasdsafkpassword"));
console.log(isValidPassword("Trtldksfasdka"));
