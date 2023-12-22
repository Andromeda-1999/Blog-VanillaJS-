const Blog = require('../models/blogs');// the blog model we created 

const blog_index = (req, res) => {
    //timestamps that maango already added for as
    Blog.find().sort({ createdAt: -1 })//gives as all of the document inside the blog property // craete At displayes in decending order
        .then(result => {
            //render teh index ejs file and pass the title property used in partials and the blogs which are in the datasbase(result)
            //to the array of blogs which is already present in blogs through which we are mapping the data
            res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}
const blog_details = (req, res) => {
    //extract the id from the url using params property
    const id = req.params.id;
    //retrieve the document  with this id from the data base
    //in Blog schema from models find the blog with that id by findById method in the database
    Blog.findById(id)
        .then(result => {
            //send the properties of that blog with that id as the result object
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        });

}
const blog_create_get = (req, res) => {
    //auutomatically sets the Statuscode
    res.render('create', { title: 'Create' });
}
const blog_create_post = (req, res) => {
    //console.log(req.body);//and that contains all the information we need from the webform
    // create a new instance of a blog document and then save that to the collection in the database
    //using the model to create a new instance of a blog document within the code
    const blog = new Blog(req.body);//the url encoded data  we received by the express middle ware
    //method to save it to the database
    blog.save()//asychoronous task will take some time //save will automatically save the req.body object we get from the form submit
        //to the database
        //return as the promise
        .then(result => {
            //after we have submited the form we want to redirect it to the blog page
            // where and the blogs are listed using blog find method
            res.redirect('/');

        })
        //if error catch in this function
        .catch(err => {
            console.log(err);
        });
}
const blog_delete = (req, res) => {
    const id = req.params.id;//extract the id from  url
    //thsi goes out to the dat base and finds that id and deletes it from data base 
    Blog.findByIdAndDelete(id)//asycronous method so a promise using that and catch for error handling is attacthed
        .then(result => {
            //send back some json to the browser instead of directly redirecting it to blogs page
            //because we send a ajax request in the fetch api  we can not use a redirect as a response
            //we have to send json or text data back to the browser 
            //send back json data to the browser which is gonna have a redirect property
            res.json({ redirect: '/blogs', notification: "Blog successfully deleted." });//pass an object with the redirect and notification property which the frontend will handle
            //res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}