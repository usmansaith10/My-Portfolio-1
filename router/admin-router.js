const express = require("express");
const { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById,  } = require("../controllers/admin-controller"); // Destructure deleteUserById as well
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

// Apply the auth middleware before the actual controller function
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById);
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);
router.route("/contact").get(authMiddleware, adminMiddleware, getAllContacts);
router.route("/contact/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactById);

module.exports = router;
