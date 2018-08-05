/**
 * League API Controller
 */
const { buildCall } = require('../util/leagueApi');
const axios = require('axios');

exports.handleCall = async (req, res) => {
  //@TODO: Handle errors + handle user not found!!
  const url = await buildCall(req.body.callData);
  const userData = await (
    axios.get(url)
    .catch(err => {console.log(err)})
  );
  console.log(userData.data);
  res.send(userData.data);
}