import { useState, useEffect } from "react";

function TimerComponents() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Comp Mounted");

    return () => {
      console.log("Comp Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Timer Started");
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log(`Seconds: ${seconds}s`);
    }, 1000);

    return() => {
        clearInterval(timer);
        console.log("Timer stopped")
    }
  }, []);

  return <h1>Timer: {seconds}s</h1>;
}

export default TimerComponents;
