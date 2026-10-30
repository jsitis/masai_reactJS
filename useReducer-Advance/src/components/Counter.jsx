import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count+1};
        case 'decrement':
            return {count: state.count-1};
        default:
            return state;
    }
    
}



export default function Counter(){
    const [state, dispatch] = useReducer(reducer, {count:0});

    return(
        <div>
            <h2>Count:{state.count}</h2>
            <button onClick={() => dispatch({type: 'increment'})}>Increase Count</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>Decrease Count</button>
            <br />
        </div>
    )
}
