var metrics = require('./metrics');
require('./gc')(metrics);

setInterval(function() {
  // manually call gc every second
  global.gc();
}, 1000);
