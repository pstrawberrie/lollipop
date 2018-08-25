/**
 * League API Controller
 */
const { buildCall } = require('../util/leagueApi');
const axios = require('axios');

/**
 * Search User By Name
 * - returns next()
 */
exports.userSearch = async (req, res, next) => {
  const callData = {...req.body.callData};
  callData.service = 'summonerByName';
  const url = await buildCall(callData);

  // Function to run an API call by URL
  // - returns a promise
  async function runCall(urlString) {
    return new Promise(resolve => {
      let result;
      
      axios.get(urlString)
      .then(response => {
        result = {
          userInfo: response.data,
          error: null
        };
        req.userResults = result;
        return resolve(result);
      })
      .catch(err => {
        if(err.response === undefined || err.response.status === 404) {
          result = {error: 'User Not Found'};
        } else {
          result = {error: 'API Call Error'};
        }
        return resolve(result);
      })

    });
  }

  // Run a call for each url in the array
  // - we're doing this because some regions have multiple endpoints
  // - we want to make sure a user does not belong to either of those endpoints before throwing 'not found'
  for(const urlString of url) {

    let call = await runCall(urlString);
    req.userResults = call;

    if(call.userInfo) {
      return next();
    }
  }

  return next();
}

/**
 * Get User's Matches By Account ID
 * - returns next()
 */
exports.userMatches = async (req, res, next) => {
  if(req.userResults.error !== null) res.json(req.userResults);

  const callData = {...req.body.callData};
  callData.service = 'matchesByAccountId';
  const url = await buildCall(callData);

  console.log(req.userResults);
  return next();
}

/**
 * Combine all User Data & Resolve
 * - returns next()
 */
exports.resolveUser = (req, res) => {
  res.json(req.userResults);
}