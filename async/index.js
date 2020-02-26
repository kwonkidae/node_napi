const runWorker = require('./build/Release/addon.node');

console.log(runWorker);
let result = runWorker.runSimpleAsyncWorker(3, AsyncWorkerCompletion);
console.log("runSimpleAsyncWorker returned '" + result + "'.");

function AsyncWorkerCompletion(err, result) {
  if (err) {
    console.log('SimpleAsyncWorker returned an error: ', err);
  } else {
    console.log("SimpleAsyncWorker returned '" + result + "'.");
  }
}
