const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;

const { User } = require('../models/user.model');

const getUsers = async (req, res) => {
   try {
      const users = await User.find({});
      res.json({ success: true, response: users });
   } catch (error) {
      res.json({
         success: false,
         message: 'Error Retrieving Users',
         errorMessage: error.message,
      });
   }
};

const getUser = async (req, res) => {
   try {
      const user = req.user;
      console.log(user);
      res.json({ success: true, user: user });
   } catch (error) {
      res.json({
         success: false,
         message: 'Error Retrieving the user',
         errorMessage: error.message,
      });
   }
};

const handleUserSignUp = async (req, res) => {
   const { email } = req.body;
   const user = await User.findOne({ email: email });
   try {
      if (user) {
         throw new Error('User already exist with this email');
      }
      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();

      res.status(201).json({
         success: true,
         message: 'User Signed Up',
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to Sign Up',
         errorMessage: error.message,
      });
   }
};

const handleUserSignIn = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (!user) {
         throw new Error("User doesn't exist Please Signup");
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
         throw new Error("Email and password doesn' match");
      }

      const token = jwt.sign({ userId: user._id }, SECRET, {
         expiresIn: '24h',
      });

      res.status(201).json({
         success: true,
         userId: user._id,
         firstName: user.firstName,
         email: user.email,
         token,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Unable to Sign In',
         errorMessage: error.message,
      });
   }
};

module.exports = { getUsers, getUser, handleUserSignUp, handleUserSignIn };
