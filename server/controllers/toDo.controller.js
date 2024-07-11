const Todo = require('../models/toDo.model')

const getToDos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
}

const createToDo = async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
}

const updateToDo = async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
}

const deleteToDo = async (req, res) => {
    await Todo.findByIdAndRemove(req.params.id);
    res.json({ message: 'Todo deleted successfully' });
}

module.exports = {
    getToDos,
    createToDo,
    updateToDo,
    deleteToDo
};