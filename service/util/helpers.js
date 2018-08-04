/**
 * Helpers
 */

exports.handleAsync = function() {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};