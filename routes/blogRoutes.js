//we need to attach the routes to express router instead of app
const express = require('express');
const blogController = require('../Controllers/blogControllers');
const router = express.Router();//new instance of a router object




// redirects
router.get('/', blogController.blog_index);
//create a post handle //to save the data coming from create.ejs 
// /blogs is where we are sending request to fire a call back function
//just like post request 
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
//ROUTE PARAMETERS LIKE USE PARAMS HOOK IN REACT
//the variable parts of the route that may change e.g(:id) if only id then it will look for a static url
router.get('/:id', blogController.blog_details);
//delete request handler
router.delete('/:id', blogController.blog_delete);
// app.get('/about-us', (req, res) => {
//     //automatically sets the Statuscode
//     res.redirect('/about');
// });

//we are gonna export this router
module.exports = router;