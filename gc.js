var profiler = require('gc-profiler');

/**
 * Provide stats about how long garbage collection takes.
 *
 * @param Metrics metrics
 */
module.exports = function(metrics) {
  profiler.on('gc', function (info) {
    metrics.timing('System/GarbageCollection[ms]', info.duration);
  });
};
