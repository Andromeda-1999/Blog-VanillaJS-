//split code into multiple files and then import export things accordingly
//array of people name
const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
//in order to export double arrays in modules
const ages = [20, 25, 30, 35];

//console.log(people);
//we want to import people file into module file
//we want to export someting manually from this file module 
//and whatever we set it equal to is what is going to returned to the xyz variable in modules
//we could return it with a string 
//or return it with people name array
//and also an empty object with both people and age array
//and it doesnot matter that in modules the const is named xyz while this is called people
//module.exports = {};

module.exports = {
    people,
    ages,
}