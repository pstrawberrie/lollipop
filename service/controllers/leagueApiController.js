/**
 * League API Controller
 */
const axios = require('axios');

exports.handleCall = async function(req, res) {
  const userCall = await axios.get(
    
  );
  res.json({hi:'hey'});
}