import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const BloodDonationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors : ", errors);
  const [userData, setuserData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  const submitHandler = (data) => {
    alert("Form is Submited!!");
    console.log(data);
    setuserData(data);
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
    //Blood Group validation
    bloodGroupValidator: {
      required: {
        value: true,
        message: "Blood Group is Required!!!",
      },
    },
    //Blood Quantity validation
    bloodquantityValidator: {
      required: {
        value: true,
        message: "Blood Quantity is Required!!!",
      },
    },
  };

  //Blood Group Array
  const bloodGroups = [
    { id: 1, bloodgroup: "A Positive", bloodgroupid: "A+" },
    { id: 2, bloodgroup: "A Negative", bloodgroupid: "A-" },
    { id: 3, bloodgroup: "B Positive", bloodgroupid: "B+" },
    { id: 4, bloodgroup: "B Negative", bloodgroupid: "B-" },
    { id: 5, bloodgroup: "AB Positive", bloodgroupid: "AB+" },
    { id: 6, bloodgroup: "AB Negative", bloodgroupid: "AB-" },
    { id: 7, bloodgroup: "O Positive", bloodgroupid: "O+" },
    { id: 8, bloodgroup: "O Negative", bloodgroupid: "O-" },
  ];

  return (
    <div style={{ color: "whitesmoke" }}>

      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <h1 style={{ color: "red", textAlign: "center" }}><b>BLOOD DONATION FORM</b></h1>
        <br/>
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

        {/* Blood Group */}
        <div>
          <label>Blood Group : </label>
          <select
            {...register("bloodgroup", validationSchema.bloodGroupValidator)}
          >
            <option value={""}>== Select Blood Group ==</option>
            {bloodGroups.map((bg) => {
              return <option value={bg.bloodgroupid}>{bg.bloodgroup}</option>;
            })}
          </select>
          {errors.bloodgroup?.message}
        </div>

        {/* Blood Quantity */}
        <div>
          <label>Blood Quantity : </label>
          <input
            type="text"
            placeholder=" L , ml "
            {...register("bloodquantity", validationSchema.bloodquantityValidator)}
          ></input>
          {errors.bloodquantity?.message}
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
      <br/><br/>
      {/* Result */}
      {isSubmited == true && (
        <div style={{textAlign:"center"}}>
          <h2 style={{color:"red"}}><b>{userData.name}</b></h2>
          <h4>Age : {userData.age}</h4>
          <h4>Phone No. : {userData.phoneno}</h4>
          <h4>Blood Group : {userData.bloodgroup}</h4>
          <h4>Blood Quantity : {userData.bloodquantity}</h4>

        </div>
      )}
    </div>
  );
};
