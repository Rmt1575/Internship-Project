import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "all" });
  console.log("errors : ", errors);

  //Submit Handler
  const submitHandler = (data) => {
    console.log(data);                                  
    Alert("Form Is Succeessfully Submitted")
  };

  //password store with the use of watch() for validate confirmPassword
  const password = watch("password");
  console.log(password);

  //Validation
  const validationSchema = {
    //Contact Validation
    contactValidator: {
      required: {
        value: true,
        message: "Contact No. Required!!",
      },
      pattern: {
        value: /[6-9]{1}[0-9]{9}$/,
        message: "Invalide Password!!",
      },
    },
    //Promo Code Validation
    promocodeValidator: {
      required: {
        value: true,
        message: "Promo Code is Required!!",
      },
      validate: (valid1) => {
        return valid1 == "Rushang" || "Invalide Promo Code!!";
      },
    },
    //Hobbies Validation
    hobbiesValidator: {
      required: {
        value: true,
        message: "Hobbies should be selected!!",
      },
      validate: (valid2) => {
        return valid2?.length >= 2 || "Minimum 2 hobbies should be selected!!";
      },
    },
    //Password Validation
    passwordValidator: {
      required: {
        value: true,
        message: "Password is Required!!",
      },
    },
    //Confirm Password Validation
    confirmPasswordValidator: {
      required: {
        value: true,
        message: "You Need to Confirm the Password!!",
      },
      validate: (valid3) => {
        return valid3 == password || "Confirm password is not matching!!";
      },
    },
  };

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ textAlign: "center", color: "red" }}>
        FORM DEMO PATTERN & VALIDATE 3
      </h1>
      <br/>

      {/* Form */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Contact */}
        <div>
          <label>Contact No. :</label>
          <input
            type="text"
            {...register("contact", validationSchema.contactValidator)}
          ></input>
          {errors.contact?.message}
        </div>
        <br/>

        {/* PromoCode */}
        <div>
          <label>Promo Code :</label>
          <input
            type="text"
            {...register("promocode", validationSchema.promocodeValidator)}
          ></input>
          {errors.promocode?.message}
        </div>
        <br/>

        {/* Hobbies */}
        <div>
          <label>HOBBIES : </label> <br />
          Cricket{" "}
          <input
            type="checkbox"
            value="cricket"
            {...register("hobbies", validationSchema.hobbiesValidator)}
          ></input>
          Music{" "}
          <input
            type="checkbox"
            value="music"
            {...register("hobbies", validationSchema.hobbiesValidator)}
          ></input>
          Travel{" "}
          <input
            type="checkbox"
            value="travel"
            {...register("hobbies", validationSchema.hobbiesValidator)}
          ></input>
          Playing Games{" "}
          <input
            type="checkbox"
            value="playing  games"
            {...register("hobbies", validationSchema.hobbiesValidator)}
          ></input>
          Reading{" "}
          <input
            type="checkbox"
            value="reading"
            {...register("hobbies", validationSchema.hobbiesValidator)}
          ></input>{" "}
          {errors.hobbies?.message}
        </div>
        <br/>

        {/* Password */}
        <div>
          <label>Password :</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          ></input>
          {errors.password?.message}
        </div>
        <br/>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password :</label>
          <input
            type="password"
            {...register(
              "confirmPassword",
              validationSchema.confirmPasswordValidator,
            )}
          ></input>
          {errors.confirmPassword?.message}
        </div>
        <br/>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{ padding: "8px 18px", cursor: "pointer" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
