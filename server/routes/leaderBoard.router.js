const express = require('express');
const {
   getLeaderBoardDetails,
} = require('../controllers/leaderBoard.controller');
const router = express.Router();

router.get('/leaderboard', getLeaderBoardDetails);

module.exports = router;
