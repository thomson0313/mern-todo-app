import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoForm from './TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/todos/')
      .then(response => { setTodos(response.data) })
      .catch(error => console.error(error));
  }, []);

  const addTodo = (newTodo: any) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo._id}>
            <div>{todo.task}</div>
            <div onClick={() => alert('update')} style={{ backgroundColor: 'blue', color: "white", padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Update</div>
            <div onClick={() => alert("delete")} style={{ backgroundColor: 'red', color: "white", padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Delete</div>
          </li>
        ))}
      </ul>
      <TodoForm onAdd={addTodo} />
    </div>
  );
};
export default App;