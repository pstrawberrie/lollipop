const express = require('express');
const router = express.Router();
const { handleAsync } = require('./util/helpers');

// Controllers
const leagueApiController = require('./controllers/leagueApiController');

// ++ League API Call
router.post('/league-api', 
  handleAsync(leagueApiController.handleCall)
);

module.exports = router;
