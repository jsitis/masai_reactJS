import React from "react";
import { useState } from "react";

const useClickMiddleware = (callback, delay = 2000) => {
  const [lastClick, setLastClick] = useState(0);

  return () => {
    const now = Date.now();
    if (now - lastClick < delay) {
      console.log("Click blocked by middleware");
      return;
    }

    setLastClick(now);
    callback();
  };
};

function ClickButton() {
  const handleClick = useClickMiddleware(() => {
    console.log("Button Clicked");
  });

  return (
    <>
      <button onClick={handleClick}>Click Me!! </button>
    </>
  );
}

export default ClickButton;
