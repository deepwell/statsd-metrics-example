var StatsD = require('node-statsd');

/**
 * Log metrics to a local statsd.
 */
var namePrefix = 'statstest.';
var client = new StatsD();
client.socket.on('error', function(error) {
  console.log(new Error('Error in socket: ', error));
});

/**
 * Change name to be more statsd appropriate.
 */
function alterName(name) {
  name = name.toLowerCase();
  name = name.replace(/\//, '.');
  return namePrefix + name;
}

/**
 * Handle errors.
 */
function next(err) {
  if (err) {
    return console.log(err);
  }
}

function increment(name, value, tags) {
  console.log('increment ', name, value);
  tags = tags || [];
  client.increment(alterName(name), value, tags, next);
}

function timing(name, value, tags) {
  console.log('timing ', alterName(name), value);
  tags = tags || [];
  client.timing(alterName(name), value, tags, next);
}

/**
 * Exports.
 */
module.exports = {
  increment: increment,
  timing: timing,
};
