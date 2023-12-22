//fill the buffer with streams of data which would be small data
//and then sent down the stream every time a buffer fills
//just like loading a youtube video where the video streams in small amount instead of watching the video after it has streamed completely
//fs is file system core module
const fs = require('fs');
//read data via readStreams write data using 
//set a const with any name equal to the fs module and use createReadStream method to create a read stream
//the first arugument in this will be the relative path of where we want to read data from 
// we have created a read stream and we have set it up and we have told node where we are reading data from
//so it starts to read that data like a button with click event in this we have a data event
//to read the buffer data insted of using the toString method we use option object  {encoding:'utf8'} which will automatically give the encoded data in the form of readable string
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
//we can create write stream aswell in which we to write the new chunk of data and in the argument we will pass the relative path of the file we want to write stream to 
const writeStream = fs.createWriteStream('./docs/blog4.txt');
//the 2 arguments are data from file 2nd is a callback function with a chunk of data
//.on is a event lister 
//evertime we receive a buffer of data and buffer receives data in small packages at a time so we can start using then start away
//so the data is a chunk of data that we get from readStream and everytime when we get any new chunk of data we fire this callback function
//and we get access to that chunk of data 
//readStream.on('data', chunk => {
//new chunk so we can see a glance of where the new chuns are consoled
//console.log('---- NEW CHUNK ----');
//console.log(chunk);
//every time we get a chunk we will write it in the new file
//it will first write new chunk heading then the actual chunk
//writeStream.write('\nNEW CHUNK:\n');
//writeStream.write(chunk);
//});

// piping
//pipe is from a readable stream to a writeable one 
//easier way of doing readStream method
//what ever you are getting from the read stream we want you to pipe it to the write stream
readStream.pipe(writeStream);