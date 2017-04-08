const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  title   : {type: String, required:true},
  status  : Boolean
})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
