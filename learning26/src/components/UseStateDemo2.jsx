import React, { useState } from "react";

export const UseStateDemo2 = () => {
  const [loading, setloading] = useState(true); //boolean
  const setloader1 = () => {
    setloading(false);
  };
  const setloader2 = () => {
    setloading(true);
  };

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>USE STATE DEMO 1</h1>

      {/* {loading == true ? <h1 style={{color:"red"}}>Mux is MoMo-chan</h1> : <h1 style={{color:"red"}}>Mux is MoMo-chan even if you stop</h1> } */}
      {loading == true && <h1 style={{ color: "red" }}>Mux is MoMo-chan</h1>}
      {loading == false && (
        <h1 style={{ color: "red" }}>Mux is MoMo-chan even if you stop</h1>
      )}
      <button onClick={setloader2}>Start</button>
      <button onClick={setloader1}>Stop</button>
    </div>
  );
};
