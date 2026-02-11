// EmployeeForm.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const EmployeeForm = () => {
  const { register, handleSubmit, watch, reset } = useForm();

  const [employeeData, setEmployeeData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Photo preview setup
  const [photoPreview, setPhotoPreview] = useState(null);
  const photoFile = watch("photo"); // FileList

  useEffect(() => {
    if (!photoFile || !photoFile[0]) return;

    const objectUrl = URL.createObjectURL(photoFile[0]);
    setPhotoPreview(objectUrl);

    // cleanup (important)
    return () => URL.revokeObjectURL(objectUrl);
  }, [photoFile]);

  const submitHandler = (data) => {
    // data.photo is a FileList
    // data.skills is an array of selected skills
    console.log("Employee Form Data:", data);

    setEmployeeData(data);
    setIsSubmitted(true);
  };

  const clearForm = () => {
    reset();
    setEmployeeData(null);
    setIsSubmitted(false);
    setPhotoPreview(null);
  };

  return (
    <div style={{ color: "whitesmoke", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "red" }}>EMPLOYEE FORM</h1>

      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <Link to="/" style={{ color: "cyan", textDecoration: "none" }}>
          ← Back to Home
        </Link>
      </div>

      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{ maxWidth: "700px", margin: "0 auto" }}
      >
        {/* Name */}
        <div style={{ marginBottom: "10px" }}>
          <label>FIRST NAME : </label>
          <input
            type="text"
            placeholder="Enter First Name"
            {...register("firstname", { required: true })}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>MIDDLE NAME : </label>
          <input
            type="text"
            placeholder="Enter Middle Name"
            {...register("middlename")}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>LAST NAME : </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            {...register("lastname", { required: true })}
          />
        </div>

        {/* Age */}
        <div style={{ marginBottom: "10px" }}>
          <label>AGE : </label>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age", { valueAsNumber: true, min: 18, max: 70 })}
          />
        </div>

        {/* DOB */}
        <div style={{ marginBottom: "10px" }}>
          <label>DOB : </label>
          <input type="date" {...register("dob", { required: true })} />
        </div>

        {/* Gender */}
        <div style={{ marginBottom: "10px" }}>
          <label>GENDER : </label>
          <br />
          MALE{" "}
          <input
            type="radio"
            value="male"
            {...register("gender", { required: true })}
          />{" "}
          FEMALE{" "}
          <input
            type="radio"
            value="female"
            {...register("gender", { required: true })}
          />{" "}
          OTHER{" "}
          <input
            type="radio"
            value="other"
            {...register("gender", { required: true })}
          />
        </div>

        {/* Address */}
        <div style={{ marginBottom: "10px" }}>
          <label>ADDRESS : </label>
          <br />
          <textarea
            placeholder="Enter Address"
            rows="4"
            style={{ width: "100%" }}
            {...register("address", { required: true, minLength: 10 })}
          />
        </div>

        {/* Photo */}
        <div style={{ marginBottom: "10px" }}>
          <label>PHOTO : </label>
          <input type="file" accept="image/*" {...register("photo")} />
          {photoPreview && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={photoPreview}
                alt="Employee Preview"
                style={{
                  width: "160px",
                  height: "160px",
                  objectFit: "cover",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              />
            </div>
          )}
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "10px" }}>
          <label>SKILLS : </label>
          <br />
          JavaScript{" "}
          <input
            type="checkbox"
            value="javascript"
            {...register("skills")}
          />{" "}
          MER {" "}
          <input type="checkbox" value="mern" {...register("skills")} />{" "}
          Python{" "}
          <input type="checkbox" value="python" {...register("skills")} />{" "}
          MEAN{" "}
          <input type="checkbox" value="mean" {...register("skills")} /> {" "}
          Java{" "}
          <input type="checkbox" value="java" {...register("skills")} />{" "}
          React{" "}
          <input type="checkbox" value="react" {...register("skills")} />{" "}
          Node.js{" "}
          <input type="checkbox" value="nodejs" {...register("skills")} /> {" "}
          SQL{" "}
          <input type="checkbox" value="sql" {...register("skills")} />{" "}
          MongoDB{" "}
          <input type="checkbox" value="mongodb" {...register("skills")} />
        </div>

        {/* Position */}
        <div style={{ marginBottom: "10px" }}>
          <label>POSITION : </label>
          <input
            type="text"
            placeholder="Ex: Frontend Developer"
            {...register("position", { required: true })}
          />
        </div>

        {/* Department (radio) */}
        <div style={{ marginBottom: "10px" }}>
          <label>DEPARTMENT : </label>
          <br />
          IT{" "}
          <input
            type="radio"
            value="it"
            {...register("department", { required: true })}
          />{" "}
          HR{" "}
          <input
            type="radio"
            value="hr"
            {...register("department", { required: true })}
          />{" "}
          SALES{" "}
          <input
            type="radio"
            value="sales"
            {...register("department", { required: true })}
          />{" "}
          FINANCE{" "}
          <input
            type="radio"
            value="finance"
            {...register("department", { required: true })}
          />
        </div>

        {/* Work Hours */}
        <div style={{ marginBottom: "10px" }}>
          <label>WORK HOURS (per day) : </label>
          <input
            type="number"
            placeholder="Ex: 8"
            {...register("workHours", { valueAsNumber: true, min: 1, max: 16 })}
          />
        </div>

        {/* Employee-ID */}
        <div style={{ marginBottom: "10px" }}>
          <label>EMPLOYEE ID : </label>
          <input
            type="text"
            placeholder="Ex: EMP-1024"
            {...register("employeeId", { required: true })}
          />
        </div>

        {/* Joining-Date */}
        <div style={{ marginBottom: "10px" }}>
          <label>JOINING DATE : </label>
          <input type="date" {...register("joiningDate", { required: true })} />
        </div>

        {/* Shift : Morning, Evening, Night */}
        <div style={{ marginBottom: "10px" }}>
          <label>SHIFT : </label>
          <select {...register("shift", { required: true })}>
            <option value="">-- Select Shift --</option>
            <option value="morning">Morning (9AM - 5PM)</option>
            <option value="evening">Evening (2PM - 10PM)</option>
            <option value="night">Night (10PM - 6AM)</option>
          </select>
        </div>

        {/* Employment-Type : Full-time, Part-time, Intern, Contract */}
        <div style={{ marginBottom: "10px" }}>
          <label>EMPLOYMENT TYPE : </label>
          <select {...register("employmentType", { required: true })}>
            <option value="">-- Select Type --</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="intern">Intern</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Register & Clear */}
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <button
            type="submit"
            style={{ padding: "8px 18px", cursor: "pointer" }}
          >
            Register
          </button>{" "}
          <button
            type="button"
            onClick={clearForm}
            style={{ padding: "8px 18px", cursor: "pointer" }}
          >
            Clear
          </button>
        </div>
      </form>

      {/* Output */}
      {isSubmitted && employeeData && (
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <h2 style={{ color: "lightgreen" }}> Employee Registered</h2>

          <h3>
            <b>Name : </b>
            {employeeData.firstname} {employeeData.middlename}{" "}
            {employeeData.lastname}
          </h3>

          <p>
            <b>Age :</b> {employeeData.age} | <b>DOB :</b> {employeeData.dob}
          </p>

          <p>
            <b>Gender :</b> {employeeData.gender} | <b>Department :</b>{" "}
            {employeeData.department}
          </p>

          <p>
            <b>Position :</b> {employeeData.position} | <b>Work Hours :</b>{" "}
            {employeeData.workHours}
          </p>

          <p>
            <b>Employee ID :</b> {employeeData.employeeId} |{" "}
            <b>Joining Date :</b> {employeeData.joiningDate}
          </p>

          <p>
            <b>Shift :</b> {employeeData.shift} | <b>Employment Type :</b>{" "}
            {employeeData.employmentType}
          </p>

          <p style={{ maxWidth: "700px", margin: "10px auto" }}>
            <b>Address :</b> {employeeData.address}
          </p>

          <div>
            <h4>
              <b>Skills :</b>
            </h4>
            {employeeData.skills?.length ? (
              employeeData.skills.map((sk, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                    margin: "4px 8px",
                    padding: "4px 10px",
                    border: "1px solid #999",
                  }}
                >
                  {sk}
                </div>
              ))
            ) : (
              <p>No skills selected</p>
            )}
          </div>

          <div style={{ marginTop: "10px" }}>
            <h4>
              <b>Photo :</b>
            </h4>
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Employee Photo"
                style={{
                  width: "160px",
                  height: "160px",
                  objectFit: "cover",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              />
            ) : (
              <p>No photo uploaded</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
