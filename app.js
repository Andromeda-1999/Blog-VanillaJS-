
//require the core module of express
//this returns as a function and we are saving in express const
const express = require('express');
//middleware called morgan which is a logger to log the details of the request 
//npm install morgan require thsi
const morgan = require('morgan');
//we could connect using the plain mongo db api package but to hectic
//we use moongoose instead
//mongoose is an ODM library is an ODM library/object document mapping library
//connect to and communicate a database
//by allowing as to create simple data base models 
//we create schema that defines thestructure of the document 
//and then we creste a model based on that schema//blog model based on blog schema
//blog model will have static functions which will allow get save delete etc
const mongoose = require('mongoose');//require to use it

//import the blog routes
const blogRoutes = require('./routes/blogRoutes');
//setup a npm express app
//we are envoking that function to create an instance of express app
//storing in app const
const app = express();
//no sql data base use documents and collection like in json fake db
//blog collection stores blog collection document like a record contains a single item of data/blog
//contains key and value pairs
//MONGO DB CLOUD SETUP// login with google create cluster
//create a data base and collection inside them
//data base access create a user so only a valid user can connect to the database
//connect for our application copy the connection string save it in const

const dbURI = 'mongodb+srv://sadie:optimist2082@cluster0.fotoo.mongodb.net/node-pro?retryWrites=true&w=majority';
//use moongoose to connect method to the data base base the above const in the method
// and then moongoose is gonna grab and connect to that datbase for us 
//the second argument removes deprication warning in an options object
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    //the above task is asynchoronous to do it is gonna take some time
    //it returns something like a promise 
    //then method will fire a callback function when the promiss of connecting to the db is complete 
    //get result inthsi call back function in that function the server shouls only start listening for request when the data base is linked
    .then(result => app.listen(3006))
    //and if their is an errroe use catch function and fire a call back function when error
    .catch(err => console.log(err));

//EJS templates are processed through embedded javascript  on the server
// register view engine
//Viewengine is the combination of HTML tags, Server Controls and a programming language and works inside the application for rendering view to the browser or to the user.
//ejs is letting as use ejs tags
app.set('view engine', 'ejs');
//default will look in the views folder which here are the assets in order to change that
app.set('views', 'assets');
// middleware & static files
//we can not add static files like style.css we would not be able to acess that file from the browser
//the server protects all of our files automatically from the users in a browser 
//so they cant just access any of our files when they want to
//make files public by static middleware
app.use(express.static('public_assets'));//to allow the browser tp access any file we need to specifdy what the browser needs to access 
// now it knows that the npm ejs package is gonna be used to create our view templates
//app.set lets as configure some application settings
// app.set('views', 'myviews');
//now we need to listen for request
//just like in server.js
//only the port name it automatically infers that we want to use localhost
//app.listen(3000);//this also returns as a instance of a server which we could later use for web socket
//middle ware code which runs (on the server)between getting a request and sending a response
//the use method is generally used to run middleware code
//we can have more then one piece of middle ware
//get handlers are also middleware as per the defination
//get handler only fire functions for get requests to a certain route 
//use method run for very type of request to all routes including post request 
//middle ware runs top to bottom
app.use(express.urlencoded({ extended: true }));//this middle ware comes along with express
//extended true is not necessary this is just a option that we can add in
//basically this takes in all the url encoded data that comes along the ride and passes
//that into an object that we can use with request 
//a bit of middle ware which is gonna pass the data we send into a workable format 
//which we can sent to this request object
//Logger midleware to log details of every request
// app.use((req, res, next) => {
//     console.log('new request made:');
//     //use request object properties and get details like path hostname method
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     //after express runs the above code it does not know how to go to the 
//     //next middleware or function for this we use next  function
//     next();//envoke the function to move on
// });
// //e.g 2
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });
//use 3rd party middleware for logger much better aproach
app.use(morgan('dev'));
//sample routes to test database
// app.get('/add-blog', (req, res) => {
//     // create a new instance of a blog document and then save that to the collection in the database
//     //using the model to create a new instance of a blog document with inthe code
//     const blog = new Blog({
//         //properties of that blog
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     })
//     //method to save it to the database
//     blog.save()//asychoronous task will take some time 
//         //return as the promise
//         .then(result => {
//             //response to the browser
//             res.send(result);
//         })
//         //if error catch in this function
//         .catch(err => {
//             console.log(err);
//         });
// });
// //to get all the blogs
// app.get('/all-blogs', (req, res) => {
//     //we do not need to create a new blog model we can directly access the Blog taht we made in the file 
//     //not doing this on the instance of the blog
//     Blog.find()//gives as all of the document inside the blog property 
//         //its again a asychronous function so we can attach a then function the promise
//         .then(result => {
//             res.send(result);
//         })
//         //and in case of error
//         .catch(err => {
//             console.log(err);
//         });
// });
// //to get a single blog by its id property
// app.get('/single-blog', (req, res) => {
//     Blog.findById('6070748d814d0544d4b0575a')
//         .then(result => {
//             res.send(result);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// });

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
//instead of creating a new server and than using routing
//get request
//we can GET the url of the browser through .get method in express
//and use request and response object
//2 arugment 1.what url or path do we want to listen to  
//second is the call back function which takes in the req and res object
//and specifies what to do with it later on 
//pass data from our app.js
//ultimately communicate with database and get that data
//and then we want to pass that data in the ejs pages

app.get('/', (req, res) => {
    //instead of using file reading 
    //express automatically sets the content type and infers the browser
    //res.send('<p>home page</p>');
    //need to tell express where it is relative from pass a second parameter in the call back
    // function which is a options object
    //default will look for a absolute path but we  are giving relative path
    //root of the project get it by _dirname 
    //absolute path of the current folder that this file is in 
    //what is the path './assets/index.html' relative to
    // res.sendFile('./assets/index.html', { root: __dirname });
    //this is how we take a view render it and send it back to the browser
    //inorder to pass data in ejs tags dynamically pass a data object while render the title attribute will
    //render in the html index file using <%= %> tags we can pass array const or any form of data
    //array of objects 
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render('index', { title: 'Home', blogs });//name  minus the extention pass blogs array in the object aswell
    //express is gonna look inside the assets folder and find
    //the index file it is gonna use ejs view engine to render index.ejs and render it back to the browser
    // to sepearte our blog routes redirect the new blogs url
    res.redirect('/blogs');

});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    // res.sendFile('./assets/about.html', { root: __dirname });
    // server side rendering
    res.render('about', { title: 'About' });
});
//routes
//scope thsi to a specific url
//this means that it is only gonna apply blog routes when we go to /blogs
//'/blogs/blogs' hence we can remove all the /blogs in the url
app.use('/blogs', blogRoutes);

// 404 page
//we use USE method to create middleware function in express
//the use function will fire for every single request coming in
//only if the request reaches this point of the code
//express will run the code top to bottom
app.use((req, res) => {
    // res.status(404).sendFile('./assets/404.html', { root: __dirname });
    res.status(404).render('404', { title: 'Not Found' });
});