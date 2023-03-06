require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail
  .send({
    to: "erenyusufduran1905@gmail.com",
    from: "eren.duran@colins.com",
    subject: "This is my first creation!",
    text: "I hope this one actually get to you.",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
