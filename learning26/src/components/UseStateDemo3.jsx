import React, { useState } from "react";

export const UseStateDemo3 = () => {
  const [users, setUsers] = useState(["Rushang", "Mihir", "Rutvik"]);
  const addUser = () => {
    setUsers([...users, "Mux"]);
  };

  return (
    <div style={{ textAlign: "center", color: "whitesmoke" }}>
      <h1>USE STATE DEMO 3</h1>
      {users.map((user, index) => {
        return (
          <li style={{ color: "red" }} key={index}>
            {user}
          </li>
        );
      })}
      <button onClick={addUser}>ADD</button>
    </div>
  );
};
