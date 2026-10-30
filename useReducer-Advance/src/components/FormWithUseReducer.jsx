import React, { useReducer } from "react";

const initialValue = {
  name: "",
  email: "",
  age: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {...state, [action.field]: action.value} 
  }
}

export default function FormWithUseReducer() {
  const [state, dispatch] = useReducer(formReducer, initialValue);
  
  function handleInputChange(e){
    const {name, value} = e.target
    dispatch({type: 'UPDATE_FIELD', field:name, value:value})
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("Form Submitted:", state)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name.."
          value={state.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email.."
          value={state.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          placeholder="Enter your age.."
          value={state.age}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
