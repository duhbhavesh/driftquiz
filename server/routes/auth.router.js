const express = require('express');
const {
   handleUserSignUp,
   handleUserSignIn,
} = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', handleUserSignUp);
router.post('/signin', handleUserSignIn);

module.exports = router;
