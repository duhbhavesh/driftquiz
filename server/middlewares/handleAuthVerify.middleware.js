const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { User } = require('../models/user.model');

const handleAuthVerify = async (req, res, next) => {
   const token = req.headers.authorization;
   try {
      const { userId } = jwt.verify(token, SECRET);
      const user = await User.findById(userId).select('-password');
      req.user = user;
      next();
   } catch (error) {
      res.status(401).json({
         succes: false,
         message: "You don't have to permission to view this content",
         errorMessage: error.message,
      });
   }
};

module.exports = { handleAuthVerify };
