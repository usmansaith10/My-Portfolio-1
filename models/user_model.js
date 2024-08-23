const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: false, 
    },

    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

// Generate JWT token
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRETKEY, { expiresIn: "30d" });
    } catch (error) {
        console.error(error);
    }
};

// Pre-save hook to hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    
    // Log the candidate password and hashed password for debugging
    console.log('Comparing passwords:', candidatePassword, this.password); 
    // Compare the plain text password with the hashed password
    return bcrypt.compare(candidatePassword, this.password);
};



const User = mongoose.model('User', userSchema);

module.exports = User;
