/**
 * League API Controller
 */
const { buildCall } = require('../util/leagueApi');
const axios = require('axios');

exports.userSearch = async (req, res, next) => {
  const callData = {...req.body.callData};
  callData.service = 'summonerByName';
  const url = await buildCall(callData);

  for(let i = 0; i < url.length; i++) {
    await (
      axios.get(url[i])
      .then(response => { 
        result = {userInfo: response.data};
        req.userResults = result;
        return;
      })
      .catch(err => {
        console.log('got error');//REMOVE
        if(err.response === undefined || err.response.status === 404) {
          result = {error: 'User Not Found'};
        } else {
          result = {error: 'API Call Error'};
        }
      })
    )
  }

  req.userResults = result;
  return next();
}

exports.userMatches = async (req, res, next) => {
  console.log(req.userResults);
  return next();
}

exports.resolveUser = (req, res) => {
  res.json(req.userResults);
}