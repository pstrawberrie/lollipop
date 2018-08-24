/**
 * League API Wrapper
 */
const config = require('../config');
const { cleanString } = require('./helpers');
const regions = require('../../data/regions.json');
const services = require('../../data/services.json');

exports.buildCall = function(callData) {
  return new Promise(resolve => {
    let arr = [];
    function buildWithRegion(region) {
      return (
        'https://' +
        region +
        services[callData.service] +
        cleanString(callData.user) +
        `?api_key=${config.apiKey}`
      )
    }

    if(Array.isArray(regions[callData.region])) {
      for(let i = 0; i < regions[callData.region].length; i++) {
        arr.push(buildWithRegion(regions[callData.region][i]));
      }
    } else {
      arr.push(buildWithRegion(regions[callData.region]));
    }

    resolve(arr);
  });
}