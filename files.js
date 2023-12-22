//use file system core module in node js
// fs is the core module(file system) and it is required inorder to use its file  properties
const fs = require('fs');

// reading files
// now fs .read files takes in two arugument 
//1. relative pathh to the file we want to read
//2. second arugument is a function which works after the file 
// has been read so readFilemethod is asynchonous meaning it will take some time to do and
// once is is done it will fire the callback function the 2nd argument and handle a err
// hence it will take a err (if their was one)and data(which we would like to read) has function arguments 
//fs.readFile('./docs/blog1.txt', (err, data) => {
//if (err) {
//if the relative path doesnt exiat then we will get thsis error
//  console.log(err);
// }
// this returns as a buffer which is just a package of data
//console.log(data);
//thsi will turn the buffer into string
//console.log(data.toString());
//});
//javascript will run this line first because the read file will take some time
// after last line then it will show the data in that file
//console.log('last line');

// writing files
// now write file will take in three arguments
//1.the relative path of the file we want to write in 
//2.the text we want to 
//3. is ofcourse a call back function this is asychronous
// './docs/blog1.txt', 'hello, world' after these 2 are done it will then call the function

// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// });
// //to a file that doesnt already exist it will just create this file for as
// //and then write to it
// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written');
// });

// directories
//to existsSync check if the the folder already exists
// if yess then remove that folder
//all this tasks are asychronous will take time
// if (!fs.existsSync('./sadia_assets')) {
//     //make directory will create the assets folder
//     fs.mkdir('./sadia_assets', err => {
//         //if that folder is alraedy craeted it will show error
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     // remove this directory
//     fs.rmdir('./sadia_assets', err => {
//         //the error will show if the file doesnot exist 
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// deleting files
//if this deleteme file exists then it will fire some code 
if (fs.existsSync('./docs/deleteme.txt')) {
    //unlink is used to delete a file after checking it exists
    //the two argumnt are the relativ epath of the file we want to delete
    //and a callback function which will run after the file is unlinked or deleted
    fs.unlink('./docs/deleteme.txt', err => {
        //if any error was found in deleting the it would console it
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}