var mongoose = require("mongoose");

//COMMENT SCHEMA
var commentSchema = new mongoose.Schema({
   text: String,
   author: String
});

module.exports = mongoose.model("Comment", commentSchema);