import React from "react";
import { useForm } from "react-hook-form";

export const PGUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors : ", errors);

  const submitHandler = (data) => {
    alert("Form submitted Sucessfully...");
    console.log(data);
  };
  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "**Name is required**",
      },
    },
    numberValidator: {
      required: {
        value: true,
        message: "**Please Enter your Mobile No**",
      },
      minLength: {
        value: 10,
        message: "**Number Can't be less than 10 digit**",
      },
      maxLength: {
        value: 10,
        message: "**Number can't be above 10 digit**",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "**Age is Required**",
      },
      min: {
        value: 16,
        message: "**Min age should be 16 years**",
      },
      max: {
        value: 60,
        message: "**Max age should be 60 years**",
      },
    },
    addressValidator: {
      required: {
        value: true,
        message: "**Enter Address please**",
      },
      max: {
        value: 255,
        message: "**max value is 255 characters**",
      },
    },
    genderValidator: {
      required: {
        value: true,
        message: "**Please select your gender**",
      },
    },
  };

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>PG USER FORM</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >

        {/* Name */}
        <div>
          <label>Name :</label>{" "}
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", validationSchema.nameValidator)}
          ></input>
          <span style={{ color: "red" }}> {errors.name?.message}</span>
        </div>

        {/* Mobile No. */}
        <div>
          <label>Mobile No :</label>{" "}
          <input
            type="number"
            placeholder="Enter Mobile No"
            {...register("mobileno", validationSchema.numberValidator)}
          ></input>
          <span style={{ color: "red" }}> {errors.mobileno?.message}</span>
        </div>

        {/* Gender */}
        <div>
          <label>Gender :</label>
          {"  "}
          <input
            type="radio"
            value="male"
            {...register("gender", validationSchema.genderValidator)}
          ></input>
          Male{" "}
          <input
            type="radio"
            value="female"
            {...register("gender", validationSchema.genderValidator)}
          ></input>
          Female{"      "}
          <span style={{ color: "red" }}> {errors.gender?.message}</span>
        </div>

        {/* Age */}
        <div>
          <label>Age :</label>{" "}
          <input
            type="number"
            placeholder="Enter age"
            {...register("age", validationSchema.ageValidator)}
          ></input>
          <span style={{ color: "red" }}> {errors.age?.message}</span>
        </div>

        {/* Addresss */}
        <div>
          <label>Address :</label>{" "}
          <textarea
            placeholder="Enter Address"
            rows="4"
            style={{ width: "100%" }}
            {...register("address", validationSchema.addressValidator)}
          />
          <span style={{ color: "red" }}> {errors.address?.message}</span>
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{ padding: "8px 18px", cursor: "pointer" , color:"cyan"}}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
