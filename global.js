//window object inside browser is the global object and it has merhods in it such as settimeout etc alert
//and we can use them inside te console  by typing window
//inside node the global object is global
console.log(global);
//global object  has some properties such as 
// global.setTimeout(() => {
//     console.log('in the timeout');

// }, 3000);
// can be accesed without global.
//this runs after one second 
// setTimeout(() => {
//     console.log('in the timeout');
//     //set interval will stop after 3 seconds
//     clearInterval(int);
// }, 3000);

// //this keeps on running the function very one second
// const int = setInterval(() => {
//     console.log('in the intervalnode');
// }, 1000);
//these are useful when we have to get the current directory of the file 
//because sometimes we are interacting with different paths and we need to formulate the path
//absolute path of the current folder that this file is in 
console.log(__dirname);
//absolute path of the file 
console.log(__filename);