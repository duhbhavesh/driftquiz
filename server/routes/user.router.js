const express = require('express');
const { getUsers, getUser } = require('../controllers/user.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.get('/user', handleAuthVerify, getUser);
router.get('/users', handleAuthVerify, getUsers);

module.exports = router;
