import React, { act, useReducer } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case "TOGGLE":
      return state.map((todo) =>
        todo.id == action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

export default function TodoApp2() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD", payload: "New Task" })}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "20px",
              }}
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
