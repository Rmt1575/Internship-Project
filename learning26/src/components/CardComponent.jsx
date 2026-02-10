import React from "react";

export const CardComponent = (props) => {
  return (
    <div class="container mt-5" style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>CARD COMPONENT</h1>
      <div class="card custom-card" style={{ width: "16 rem;" }}>
        <img
          src="https://picsum.photos/300/200"
          class="card-img-top"
          alt="image"
          style={{
            display: "block",
            margin: "auto",
            height: "auto",
            width: "auto",
          }}
        />
        <div class="card-body">
          <h5 class="card-title">{props.title || "TITLE"}</h5>
          <p class="card-text">{props.description || "DESCRIPTION"}</p>
          <button onClick={() => window.location.reload()}>Change Image</button>
        </div>
      </div>
    </div>
  );
};
