const { exitHook } = require('../utils');

console.log("Executing PRE-PUSH");
exitHook();