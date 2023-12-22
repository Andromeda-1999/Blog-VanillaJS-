//is a JavaScript library that provides utility functions for common programming tasks using a functional programming paradigm; it builds upon the older underscore. js library.
const _ = require('lodash');
const fs = require('fs');

//server side code backend code powered by node.js

//server will be the thing listing for enqiring request from a browswer
//ip addresses are computer address 
//we use domain name to mask these address
//domain name will find the ip address which is attached to the site
//and then browser will use the ip address masked in the domain name and figure out the backend server of that website
// type something in the browser to look up IP address associated with that domain and that domain will return some html page
//This is called a GET Request 
//this communication between a server and a browser is 
//via HTTP hyper text transfer protocol
//the http core module 
//to create a server manually which leaveson te backend
//and this server listens for request from the browser and decides what response to send to the browser
//dont mix react and node react is client side and node is server side
//1. we require the http core module to create server that handles requestes coming in from browswer by clients
const http = require('http');
//store the http createServer method in the constant
//arugument takes in a callback server thsi call back server is gona run every time
//a request comes in from the server
//inside the function we get acccess  to 2 different objects
//request and response object  
//request object come loaded with information full of information about the  url that is being requested
//the response object which we use to actually send a response to the user in the browser 
const server = http.createServer((req, res) => {
    //this is logged at the server and not in the browser dom 
    //request object with huge information tagged to it some of which are
    //console.log(req.url, req.method);
    // lodash
    const num = _.random(0, 20);
    console.log(num);
    //call the method of lodash bt variable name _ and dot.
    //will allow great arrow function to be called once only
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();
    // set header content type for response type by using the response object
    // response header give the browser information about what kind of response is coming back to it
    // by using the response object and setHeader method by setting the content type plain or html
    //res.setHeader('Content-Type', 'text/html');//sending back pain text to the browser
    //usecresponse object and write method to write to that response
    //res.write('hello, ninjas');
    // res.write('<p>hello again, ninjas</p>');
    //we have to end the response as well
    //res.end();//which send all of the resulting code back to the browser
    //to send a entire html page when user sends a request
    // we are still gonna set the header
    res.setHeader('Content-Type', 'text/html');
    //read a file send the data back from the file
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         //if the relative path doesnt exiat then we will get thsis error
    //         console.log(err);
    //         res.end();
    //     }
    // this returns as a buffer which is just a package of data
    //console.log(data);
    //thsi will turn the buffer into string
    //console.log(data.toString());
    // else {
    //     //res.write(data.toString());
    //     res.end(data);

    // }
    // });
    // routing
    //like in react routing the path of the localhost stayed the same
    //while the library create book and home /differed
    //
    // fs.readFile('./views/index.html', (err, data) => {
    //we are getting the url from the request object 
    let path = './assets/';
    //evaluate the request url of the browser
    //use the switch cycle to switch through the paths
    //  (/ ,GET)
    switch (req.url) {
        case '/':
            //path and apphend the page index or about to the path
            path += 'index.html';
            //status codes describe the type of response sent to the browser
            //100 informational responses
            //200 success codes
            //300 codes for redirects
            //400 user or client error codes
            //500 server error codes
            //to state a status code of a response object and use the statusCode property
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            //this means that the browser got the about html page in response 
            //everthing is ok
            res.statusCode = 200;
            break;
        //redirect the page to about case we suddenly changed the path from about us to about
        case '/about-me':
            //300 range redirect
            res.statusCode = 301;
            // we do this using a response header with location instead of content type
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            //this means that the browser got the 404 html page in response 
            //everthing is far from  ok
            res.statusCode = 404;
    }
    // send html
    //instead of hard cording the path we will use swith case statement teh rset of the process of reading remains same
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        //res.write(data);
        res.end(data);
    });

});
//we had a server above bit it did not do anything it just floated around in our file 
//it is not actually listening for a active request 
//for that we have to envoke the listen method
// localhost is the default value for 2nd argument
//port number and local host  and the call back function which enables as to listen for request
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
//nodemon server sets up a live reload server
//npm init to install packages.json file