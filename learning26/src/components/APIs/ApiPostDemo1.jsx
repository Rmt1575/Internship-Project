import React, { useState } from "react";
import axios from "axios";

export const ApiPostDemo1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    isActive: false,
    password: "",
  });

  const [message, setMessage] = useState("");

  //Input Change Handler
  const handleChange = (inputchangeevent) => {
    const { name, value, type, checked } = inputchangeevent.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //Submit Handler
  const handleSubmit = (submithandleevent) => {
    submithandleevent.preventDefault();
    submitHandler(formData);
  };

  //Async API Call
  const submitHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://node5.onrender.com/user/user/",
        data,
      );

      console.log(response.data);
      setMessage("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
      setMessage("Registration Failed!!");
    }
  };

  return (
    <div style={{ padding: "30px", color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>
        <b>Register User</b>
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "30px",
          maxWidth: "700px",
          margin: "0 auto",
          border: "1px solid white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            style={{ marginLeft: "10px" }}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            style={{ marginLeft: "10px" }}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age : </label>
          <input
            type="number"
            name="age"
            style={{ marginLeft: "10px" }}
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isActive"
              style={{ marginRight: "10px" }}
              checked={formData.isActive}
              onChange={handleChange}
            />
            : Is Active
          </label>
        </div>

        <div>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            style={{ marginLeft: "10px" }}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit" style={{ color: "red" }}>
          Register
        </button>
      </form>

      <h3>{message}</h3>
    </div>
  );
};
