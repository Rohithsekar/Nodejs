hey = require('./hello.js'); //importing the function that was exported in hello.js module
hey(); //outputs Hello world!

const greet = (name)=>{
    console.log(`hello, ${name}`);
}
greet(`mario`); //outputs hello, mario
greet('you'); //outputs hello, you