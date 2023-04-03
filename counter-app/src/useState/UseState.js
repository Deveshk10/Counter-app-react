import React, { useState } from "react";
import "../useState/centre.css";

const UseState = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount((preState) => ++preState);
    };
    return (
        <div className="main">
            <h1>Counter App</h1>
            <hr></hr>
            <h3>Count is :{count}</h3>
            <button onClick={increaseCount}>Count Up</button>
            <button onClick={() => setCount((preState) => preState - 1)}>Count Down</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default UseState;
