const router = require('express').Router();

const ToDoControllers = require('../controllers/toDo.controller') 

// Get todos
router.get('/todos', ToDoControllers.getToDos);

// Create a new todo
router.post('/todos', ToDoControllers.createToDo);

// Update an existing todo
router.put('/todos/:id', ToDoControllers.updateToDo);

// Delete a todo
router.delete('/todos/:id', ToDoControllers.deleteToDo);

module.exports = router;