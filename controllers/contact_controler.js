const contact = require("../models/contact_model");

const contactForm = async (req, res)=>{
    try {
        const response = req.body;
        await contact.create(response);
        res.status(200).json({msg:"Message sent successfully."});
    } catch (error) {
        res.status(500).json({msg:"Message not delivered."});

    }
};


module.exports = contactForm;