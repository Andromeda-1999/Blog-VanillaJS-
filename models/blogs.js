//to define the structure of the document and lateruse it as a model to apply save delete etc
const mongoose = require('mongoose');
//get schema from the mongoose object //schema is the thing that models wraps around
const Schema = mongoose.Schema;//constructor function use it to create a schema
//const blogSchema = new Schema() this craetes a new instance of a schema object
const blogSchema = new Schema({
    //properties our blog object has
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    //we can send another options object
    //in future when we upadate and create properties at will auto assign those values to those properties for as
}, { timestamps: true });
//model is a thing that surrounds that schema and provides as with an interface by which to communicate
//with a database from that document type
//const to save the  model in  by using a method called model which takes in 2 parameters
//1. the name of thsi model impo because its gonna look at this name and then pluralize it
//and then look for that collection inside this data base whenever we use this model to communicate with the data base
//2.nd is the schema we want to base this model on what type of object are we gonna store in side thsi object
//its gonna be the name of the schema we created above 
const Blog = mongoose.model('Blog', blogSchema);
//export this model so we can use it else where in this project
module.exports = Blog;