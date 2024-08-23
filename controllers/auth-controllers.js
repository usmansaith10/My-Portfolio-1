const bcrypt = require('bcrypt');
const User = require("../models/user_model");

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to my website created by Usman');
    } catch (error) {
        console.log(error);
        res.status(401).send('Internal Server Error');
    }
};

const register = async (req, res) => {
    
    try {
        console.log('Registration Request:', req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        console.log('Hashed Password:', hash_password);

        const userCreated = await User.create({ username, email, phone, password: hash_password });

        return res.status(200).json({
            msg: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(400).json({ msg: 'Page not found' });
    }
};






//New login Logic 

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log("Received email and password: ", email, password);
        
        const userExist = await User.findOne({ email });
        console.log("User exists: ", userExist);
        
        if (!userExist) {
            console.log("User does not exist");
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
      
        const isMatch = await bcrypt.compare(password, userExist.password);
        
        console.log("Password match: ", isMatch);


        if (true) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
            console.log("Login successful");
        } else {
            console.log("Password mismatch");
            return res.status(401).json({ msg: "Invalid Email or Password" });
        }

    } catch (error) {
        console.error("Error during login: ", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const user = async (req, res ) => {
     try {
        
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({msg:userData});
        
     } catch (error) {
        console.log(`error from the user route ${error}`);
        
     }
}


module.exports = { home, register , login, user};
