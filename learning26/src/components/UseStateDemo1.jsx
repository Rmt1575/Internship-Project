import React from "react";
import { useState } from "react";

export const UseStateDemo1 = () => {
  const [count, setCount] = useState(0);
  const increseCount = () => {
    setCount(count + 1);
    console.log("count after increse", count);
  };
  const decreaseCount = () => {
    setCount(count - 1);
    console.log("count after decrease", count);
  };

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>USE STATE DEMO 1</h1>
      <h1>Count = {count}</h1>
      <button onClick={increseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};
