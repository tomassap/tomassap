const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys");

// load nodemailer
const nodemailer = require("nodemailer");

const validateContactInput = require("../../validation/contact");
// load email model
const Email = require("../../models/Email");

// @route POST api/emails/send
// @desc Send email
// @access Public
router.post("/send", (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newEmail = new Email({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    body: req.body.body
  });

  newEmail
    .save()
    .then(email => res.json(email))
    .catch(err => console.log(err));

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details: </h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.body}>/p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.us-east-1.awsapps.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "andrew@tomassap.com", // generated ethereal user
      pass: keys.emailPass // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Andrew Tomassone 👻" <andrew@tomassap.com>', // sender address
    to: "andrew.tomassone@gmail.com", // list of receivers
    subject: "Contact Request ✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

module.exports = router;
