const User = require("../models/user_model");
const Contact = require("../models/contact_model");

// To Get all the Users Data
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);

        if (!users || users.length === 0) { // Corrected typo in length check
            return res.status(404).json({ message: "User not Found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Single User Logic
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });

        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

// User Update Logic
const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateUserdata = req.body;

        const updatedData = await User.updateOne({ _id: id }, {
            $set: updateUserdata,
        });

        if (updatedData.nModified === 0) {
            return res.status(404).json({ message: "User not found or data not modified" });
        }

        return res.status(200).json({ message: "User updated successfully", updatedData });
    } catch (error) {
        next(error);
    }
}

// User Delete By Id Logic 
const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await User.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log(`Deleted user with ID: ${id}`);
        return res.status(200).json({ message: "User Deleted Successfully" });

    } catch (error) {
        console.error('Error deleting user:', error);
        next(error);
    }
};

// To Get All The Contacts Data
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);

        if (!contacts || contacts.length === 0) { // Corrected typo in length check
            return res.status(404).json({ message: "Contacts not Found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

// Contact Delete By Id Logic 
const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Contact.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }

        console.log(`Deleted contact with ID: ${id}`);
        return res.status(200).json({ message: "Contact Deleted Successfully" });

    } catch (error) {
        console.error('Error deleting Contact:', error);
        next(error);
    }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById };
