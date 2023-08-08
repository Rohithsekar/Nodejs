
/*
console.log(global);
node Global_object
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function]
  }
}

Global object is the equivalent of the window object in the browser.
It is in the global execution context
*/

//we dont have to call the setTimeout method on the global object, since
//it is in the global execution context and every method called, is implicitly
//called on that global object.
// global.setTimeout(() => {
//     console.log("hello");
//     clearInterval(int);
    
// }, 3000);

// const int = setInterval(() => {
//     console.log("Good day");

    
// }, 1000);

console.log(__dirname);
console.log(__filename);
