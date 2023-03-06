require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeOrCancellationEmail = (email, name, boolean = false) => {
  sgMail.send({
    to: email,
    from: "eren.duran@colins.com",
    subject: !boolean ? "Welcome to the App!" : "Your cancelation is in process.",
    text: !boolean
      ? `Welcome to the app, ${name}. Let me know you get along with the app.`
      : `Goodbye ${name}, I hope to see you back!`,
  });
};

module.exports = {
  sendWelcomeOrCancellationEmail,
};
