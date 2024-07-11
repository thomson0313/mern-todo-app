const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoSchema = new Schema({
    task: String,
    completed: Boolean,
  });
const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;