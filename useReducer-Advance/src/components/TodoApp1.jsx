import React from "react";
import { useState } from "react";

export default function TodoApp1() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  function toggleTodo(id){
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}:todo ))
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !==id))
  }

  return (
    <div>
      <button onClick={() => addTodo("New Task")}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={()=> toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
