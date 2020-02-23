const testAddon = require('./build/Release/testaddon.node');
require('./build/Release/testaddon.node');
console.log('addon', testAddon);
console.log(testAddon.hello());
console.log(testAddon.add(5, 10));
module.exports = testAddon;
