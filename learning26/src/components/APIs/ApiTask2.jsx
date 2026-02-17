import axios from "axios";
import React, { useState } from "react";

export const ApiTask2 = () => {
  const [Commnets, setCommnets] = useState([]);

  const getCommnets = async () => {
    const response = await axios.get("https://dummyjson.com/comments");
    console.log(response);
    console.log(response.data.commnets);
    setCommnets(response.data.commnets);
  };

  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>API TASK 2</h1>
      <br />
      <h1 style={{ color: "red" }}>COMMENTS</h1>
      <br />
      <button
        style={{ color: "skyblue" }}
        onClick={() => {
          getCommnets();
        }}
      >
        GET COMMENTS
      </button>
      <br />
      {Commnets?.length > 0 && (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>BODY</th>
              <th>POST ID</th>
              <th>LIKES</th>
              <th>USER ID</th>
              <th>USER NAME</th>
              <th>REAL NAME</th>
            </tr>
          </thead>
          <tbody>
            {Commnets.map((comment) => {
              return (
                <tr>
                  <td>{comment.id}</td>
                  <td>{comment.body}</td>
                  <td>{comment.postId}</td>
                  <td>{comment.likes}</td>
                  <td>{comment.user.id}</td>
                  <td>{comment.user.username}</td>
                  <td>{comment.user.fullname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
