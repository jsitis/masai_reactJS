import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  function focusInput() {
    console.log(inputRef.current);
    inputRef.current.style.color = 'red';
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
