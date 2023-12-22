//to import people file into module we use require
// const people = require('./people');
// inorder to that we set const with any name 
//and set it equal to require e.g =require('./people');
//and inside reqire we have the relative path to what ever file we need imported
//now we are requiring or importing this file into modules
//value of xyz is an empty object
//what ever we maually export will be applied to xyz const 
//and then it will stop returning an empty object 
//const xyz = require('./people');
//best practice to input multiple different things from another file
//is to use destructuring 
//instead of xyz we can use an object and then extract what ever property we might need 
const { people, ages } = require('./people');
console.log(people, ages);

//imorder to use both the array in xyz which were exported in the peoples file 
//console.log(xyz.people, xyz.ages);
//we cant just access people array of people file with require command we need to manually export it first
//hence this will return people not defined
//console.log(people);

// const data = require('./people');

// console.log(data.people, data.ages);

// const { people, ages } = require('./people');

// console.log(people, ages);


//node.js come with cool modules built into it 
//os stands for operating system returns and the os object has a laot of information about the current operating system it is 
//running on
const os = require('os');
// two of the properties
//platform it is running on and which folder its in
console.log(os.platform(), os.homedir());