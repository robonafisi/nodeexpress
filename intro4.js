//Modules
//Every file is a module
//The idea is to have encapsulated code and share minimum info
//To export the code from a file we use
//module.exports
//Import them using:
//const variable = require('./file_name')


const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi("Susan")