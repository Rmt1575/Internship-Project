import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors : ", errors);

  const [isSubmited, setisSubmited] = useState(false);

  const submitHandler = (data) => {
    alert("Form is Submited!!");
    console.log(data);
    setisSubmited(true);
  };

  //validations
  const validationSchema = {
    //name validation
    nameValidator: {
      required: {
        value: true,
        message: "Name is Required!!!",
      },
      minLength: {
        value: 2,
        message: "More than 2 character needed in Name!!!",
      },
    },
    //age validation
    ageValidator: {
      required: {
        value: true,
        message: "Age is Required!!!",
      },
      min: {
        value: 16,
        message: "Minimum Age Should be 16!!!",
      },
      max: {
        value: 60,
        message: "Maximum Age Should be 60!!!",
      },
    },
    //address validation
    addressValidator: {
      required: {
        value: true,
        message: "Aaddress is Required!!!",
      },
      maxLength: {
        value: 255,
        message: "Address Maximum length should be 255!!!",
      },
    },
    //Phone Number validation
    phoneNumberValidator: {
      required: {
        value: true,
        message: "Phone Number is Required!!!",
      },
      maxLength: {
        value: 15,
        message: "Maximum Length of phone number should be 15!!!",
      },
    },
  };

  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}> FORM DEMO 2</h1>

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
          <label>NAME : </label>
          <input
            type="text"
            placeholder="Enter the Name"
            {...register("name", validationSchema.nameValidator)}
          ></input>
          {errors.name?.message}
        </div>

        {/* Age */}
        <div>
          <label>AGE : </label>
          <input
            type="number"
            placeholder="Enter the Age"
            {...register("age", validationSchema.ageValidator)}
          ></input>
          {errors.age?.message}
        </div>

        {/* Address */}
        <div>
          <label>ADDRESS : </label>
          <textarea
            type="text"
            rows="4"
            style={{ width: "100%" }}
            placeholder="floor no, building no, society, area, city, pin-code"
            {...register("address", validationSchema.addressValidator)}
          ></textarea>
          {errors.address?.message}
        </div>

        {/* Phone Number */}
        <div>
          <label>Phone No. : </label>
          <input
            type="text"
            placeholder="Enter the Phone No."
            {...register("phoneno", validationSchema.phoneNumberValidator)}
          ></input>
          {errors.phoneno?.message}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{ padding: "8px 18px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      {/* Result */}
      {isSubmited == true && <div></div>}
    </div>
  );
};
