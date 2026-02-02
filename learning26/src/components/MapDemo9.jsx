import React from "react";

export const MapDemo9 = () => {
  var users = [
    { id: 1, name: "Admin", active: true },
    { id: 2, name: "Arena Manager", active: true },
    { id: 3, name: "Trainer", active: false },
    { id: 4, name: "Player", active: true },
    { id: 5, name: "Guest", active: false },
  ];
  return (
    <div style={{ color: "white" }}>
      <h1>MAP DEMO 9</h1>
      <h3> Conditional Rendering</h3>
      {users.map((user) => {
        return (
          <p key={user.id} style={{ color: user.active ? "green" : "red" }}>
            {user.name} - {user.active ? "Active" : "Inactive"}
          </p>
        );
      })}
    </div>
  );
};
