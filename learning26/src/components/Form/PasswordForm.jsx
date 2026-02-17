/* eslint-disable react-hooks/incompatible-library */
import React from "react";
import { useForm } from "react-hook-form";

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });
  console.log("errors...", errors);

  //watch  pasword field and store in password variable
  const password = watch("password") || "";
  console.log("watching...", password);

  //submit handler
  const submithandler = (data) => {
    console.log(data);
    alert("Password Created sucessfully");
  };

  // validation scheme for password field
  const validationScheme = {
    // password field validation
    passwordValidator: {
      required: {
        value: true,
        message: "**Password is required",
      },
      validate: {
        capital: (value) => {
          return (
            /[A-Z]/.test(value) || "**Password Must contain one capital letter"
          );
        },
        small: (value) => {
          return (
            /[a-z]/.test(value) || "**Password must contain one small letter"
          );
        },

        specialchar: (value) => {
          return (
            /[!@#$%^&*]/.test(value) ||
            "Password must include alteast one special character"
          );
        },
        digit: (value) => {
          return (
            /[0-9]/.test(value) || "Password must include atleast one digit"
          );
        },
        length: (value) => {
          return (
            value.length >= 8 || "**Password must be atleast 8 characters long"
          );
        },
      },
    },
  };

  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Password Game </h1>
      <br/>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Password : </label>{" "}
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", validationScheme.passwordValidator)}
          ></input>
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>
        <div>
          <input type="submit" />
        </div>
        <div>
          <h5 style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}>
            **1.....Min 1 letter must be capital
          </h5>
          <h5 style={{ color: /[a-z]/.test(password) ? "green" : "red" }}>
            **2.....Min 1 letter must be small
          </h5>
          <h5 style={{ color: /[!@#$%^&*]/.test(password) ? "green" : "red" }}>
            **4.....Atleast 1 special character added
          </h5>
          <h5 style={{ color: /[0-9]/.test(password) ? "green" : "red" }}>
            **5.....Password must include 1 digit
          </h5>
          <h5 style={{ color: password.length >= 8 ? "green" : "red" }}>
            **3.....Password length must be 8{" "}
          </h5>
        </div>
      </form>
      {password}
    </div>
  );
};
