let firstName = 'Peter';
let lastName = 'Parker';
let city = 'NewYork';

//traditional hardcoding whitspace character and concatenation of string literals
console.log(firstName + ' ' + lastName + " lives in " + city); 

/*
ECMAScript (or ES) is a scripting language specification that defines the
syntax, semantics, and behavior of JavaScript. It is the standard upon 
which JavaScript is based. ECMAScript provides a set of rules and 
guidelines that implementations of JavaScript must follow to ensure
compatibility across different platforms and environments.

The ECMAScript specification is maintained by the Ecma International 
standards organization and undergoes regular updates to introduce new
features and improvements to the language. Each new version of ECMAScript
introduces new syntax, language constructs, and functionality.

Here are some notable versions of ECMAScript:

ECMAScript 5 (ES5): This version, released in 2009, introduced significant
improvements to the language, such as strict mode, JSON support, and array
manipulation methods (forEach, map, filter, etc.).

ECMAScript 6 (ES6) / ECMAScript 2015: This version, released in 2015, 
introduced major enhancements to JavaScript, including block-scoped 
variables (let and const), arrow functions, classes, modules, template 
literals, and more.

ECMAScript 2016 and onwards: ECMAScript has been releasing new versions 
annually since 2016, with each version introducing new features and 
improvements. Notable features include async/await, enhanced object 
literals, spread syntax, destructuring assignment, and more.

JavaScript engines in web browsers and Node.js implement different 
versions of ECMAScript, and the level of support for each version may vary. 
Developers can refer to ECMAScript compatibility tables and feature 
detection techniques to ensure their code is compatible with specific 
ECMAScript versions across different platforms.

In summary, ECMAScript is the standard specification for JavaScript, 
providing guidelines for the language's syntax, semantics, and behavior.
JavaScript implementations adhere to these specifications, and new 
ECMAScript versions bring new features and enhancements to the language.
*/
//Template literals defined by ECMA Script
//Template literals use backticks which is below the ESC key and Dollar($) 
//symbol to combine variables and string.
let msg = `${firstName} ${lastName} lives in ${city}`;
console.log(msg);

let itemCount = 5;
let Total = '$95';
let result = `You have ${itemCount} items in your cart.
Your bill amount is ${Total}`;
console.log(result);