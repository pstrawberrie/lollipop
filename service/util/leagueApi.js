/**
 * League API Wrapper
 */
const config = require('../config');
const regions = require('../../data/regions.json');
const services = require('../../data/services.json');

exports.buildCall = function(callData) {
  return new Promise((resolve) => {
    let url = 'https://';
    url += regions[callData.region];
    url += services[callData.service];
    url += callData.user;
    url += `?api_key=${config.apiKey}`;
    
    return resolve(url);
  });
}