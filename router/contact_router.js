const express = require('express');
const router = express.Router();

const contactForm = require("../controllers/contact_controler");

router.route("/contact").post(contactForm);

module.exports = router;