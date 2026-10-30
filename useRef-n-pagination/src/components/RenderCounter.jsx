import React, { useEffect, useRef, useState } from "react";

function RenderCounter(){
    const[count, setCount] =  useState(0);
    const renderCount = useRef(1);
    const previousCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
        previousCount.current = count;
    })

    return(
        <div>
            <h2>Counter: {count}</h2>
            <h3>Previous Count: {previousCount.current}</h3>
            <button onClick={()=> setCount((prev)=> prev+1)}>Increase Count</button>
            <p>Component re-rendered:{renderCount.current}</p>
        </div>
    )
}

export default RenderCounter;