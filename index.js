const testAddon = require('./build/Release/testaddon.node');
require('./build/Release/testaddon.node');
console.log('addon', testAddon);
console.log(testAddon.hello());
console.log(testAddon.add(5, 10));

const prevInstance = new testAddon.ClassExample(4.3);
console.log('Testing class initial value : ', prevInstance.getValue());
console.log('After adding 3.3 : ', prevInstance.add(3.3));

const newFromExsisting = new testAddon.ClassExample(prevInstance);

console.log('Testing class initial value for derived instance');
console.log(newFromExsisting.getValue());
module.exports = testAddon;
