const express = require('express');
const router = express.Router();
const { handleAsync } = require('./util/helpers');

// Controllers
const basicSearchController = require('./controllers/basicSearchController');

// ++ League API Call
router.post('/league-api', 
  handleAsync(basicSearchController.userSearch),
  handleAsync(basicSearchController.userMatches),
  basicSearchController.resolveUser
);

module.exports = router;
