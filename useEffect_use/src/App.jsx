import { useState, useEffect } from "react";
import "./App.css";
import FetchData from "./components/FetchData";
import TimerComponents from "./components/TimerComponents";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <TimerComponents />}
      <button onClick={()=> setShow(!show)}>Show Timer</button>
    </>
  );
}

export default App;
