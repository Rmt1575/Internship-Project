import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const PlayerForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const [playerData, setplayerData] = useState({});
  const [isSubmited, setisSubmited] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
    setplayerData(data);
    setisSubmited(true);
  };

  //Logo Set Up
  const [preview, setPreview] = useState(null);
  const logoFile = watch("logo");
  React.useEffect(() => {
    if (logoFile && logoFile[0]) {
      const file = logoFile[0];
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  }, [logoFile]);

  return (
    <div style={{ color: "whitesmoke" }}>
      <h1 style={{ textAlign: "center", color: "red" }}>PLAYER FORM</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>IN-GAME-NAME : </label>
          <input
            type="text"
            placeholder="Enter In-Game-Name"
            {...register("ingamename")}
          ></input>
        </div>
        <div>
          <label>REAL-NAME : </label>
          <input
            type="text"
            placeholder="Enter Real-Name"
            {...register("realname")}
          ></input>
        </div>
        <div>
          <label>AGE : </label>
          <input
            type="number"
            placeholder="Enter Age"
            {...register("age")}
          ></input>
        </div>
        <div>
          <label>DOB : </label>
          <input type="date" {...register("dateofbirth")}></input>
        </div>
        <div>
          <label>EMAIL : </label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          ></input>
        </div>
        <div>
          <label>GENDER</label> <br />
          MALE :{" "}
          <input type="radio" value="male" {...register("gender")}></input>
          FEMALE :{" "}
          <input type="radio" value="female" {...register("gender")}></input>
        </div>
        <div>
          <label>ADDRESS : </label>
          <textarea
            placeholder="Enter Address"
            {...register("address", { required: true })}
            rows="4"
          />
        </div>
        <div>
          <label>LOGO : </label>
          <input type="file" {...register("logo")} />
        </div>

        <div>
          <input type="submit"></input>
        </div>
      </form>

      {isSubmited == true && (
        <div style={{ textAlign: "center" }}>
          <br />
          <h2>
            <b>In-Game-Name : </b>
            {playerData.ingamename}{" "}
          </h2>
          <h4>
            <b>Real-Name : </b>
            {playerData.realname}{" "}
          </h4>
          <h4>
            <b>Age : </b>
            {playerData.age}
          </h4>
          <h4>
            <b>DOB : </b>
            {playerData.dateofbirth}
          </h4>
          <h4>
            <b>Email : </b>
            {playerData.email}
          </h4>
          <h4>
            <b>Gender : </b>
            {playerData.gender}{" "}
          </h4>
          <h4>
            <b>Address : </b>
            {playerData.address}{" "}
          </h4>
          {/*to display logo*/}
          <h4>
            <b>Logo : </b>
          </h4>
          {preview && (
            <img
              src={preview}
              alt="Logo Preview"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                border: "2px solid white",
              }}
            ></img>
          )}
        </div>
      )}
    </div>
  );
};
