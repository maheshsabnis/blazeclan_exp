const path = require('path');
const gateway = require('express-gateway');
// run the gateway based on the configuration 
gateway()
  .load(path.join(__dirname, 'config'))
  .run();
