const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../../config/keys");

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
    subject: req.body.Subject,
    body: req.body.body
  });

  newEmail
    .save()
    .then(email => res.json(email))
    .catch(err => console.log(err));
});

module.exports = router;
