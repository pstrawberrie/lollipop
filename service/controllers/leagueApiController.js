/**
 * League API Controller
 */

exports.handleCall = function(req, res, next) {
  console.log('Got Params from request:');
  console.log(req.params);
  res.send(req.params);
}