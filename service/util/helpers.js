/**
 * Helpers
 */

// Catch Async Errors
exports.handleAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

// Clean a search string
exports.cleanString = string => {
 return string.trim().toLowerCase();
};