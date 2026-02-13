import React from "react";
import { useForm } from "react-hook-form";

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ color: "red", textAlign: "center" }}></h1>

      <form
        onChange={handleSubmit(submitHandler)}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
        }}
      ></form>
    </div>
  );
};
