import React, { useState } from "react";
import axios from "axios";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://node5.onrender.com/user/user/");
    console.log(response);
    console.log(response.data);
    console.log(response.data.message);
    console.log(response.data.data);
    setmessage(response.data.message);
    setusers(response.data.data);
  };

  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>API Demo 1</h1>
      <br />
      <button
        onClick={() => {
          getUsers();
        }}
      >
        GET
      </button>
      <br />
      <h2>Message : "{message}"</h2>
      {users.length > 0 && (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td style={{ color: user.isActive ? "green" : "red" }}>
                    {user.isActive ? "Active" : "Inactive"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* {users.length > 0 &&
        users.map((user) => {
          return (
            <li>
              {user.name} | {user.email}
            </li>
          );
        })} */}
    </div>
  );
};
