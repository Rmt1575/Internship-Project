import axios from "axios";
import React, { useState } from "react";

export const ApiTask2 = () => {
  const [Comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/comments");
      console.log(response);
      console.log(response.data);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error.message);
      console.log("Error fetching comments:", error);
    }
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
          getComments();
        }}
      >
        GET COMMENTS
      </button>
      <br />
      {Comments.length > 0 && (
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
            {Comments.map((comment) => {
              return (
                <tr>
                  <td>{comment.id}</td>
                  <td>{comment.body}</td>
                  <td>{comment.postId}</td>
                  <td>{comment.likes}</td>
                  <td>{comment.user.id}</td>
                  <td>{comment.user.username}</td>
                  <td>{comment.user.fullName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
