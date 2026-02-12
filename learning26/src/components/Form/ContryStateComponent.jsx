import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const CountryStateComponent = () => {
  const data = [
    {
      countryId: 1,
      countryName: "India",
      states: [
        { stateId: 101, stateName: "Gujarat" },
        { stateId: 102, stateName: "Maharashtra" },
        { stateId: 103, stateName: "Rajasthan" },
      ],
    },
    {
      countryId: 2,
      countryName: "USA",
      states: [
        { stateId: 201, stateName: "California" },
        { stateId: 202, stateName: "Texas" },
        { stateId: 203, stateName: "Florida" },
      ],
    },
    {
      countryId: 3,
      countryName: "CHINA",
      states: [
        { stateId: 301, stateName: "Guangdong" },
        { stateId: 302, stateName: "Sichuan" },
        { stateId: 303, stateName: "Zhejiang" },
      ],
    },
  ];

  const { register, handleSubmit } = useForm();

  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [states, setStates] = useState([]);
  const [result, setResult] = useState(null);

  const handleCountryChange = (e) => {
    const countryId = parseInt(e.target.value);
    setSelectedCountryId(countryId);

    const countryObj = data.find((c) => c.countryId === countryId);
    setStates(countryObj ? countryObj.states : []);
  };

  const onSubmit = (formData) => {
    // formData countryId is string => convert to number
    const countryObj = data.find(
      (c) => c.countryId === parseInt(formData.countryId),
    );

    setResult({
      countryName: countryObj?.countryName,
      stateName: formData.stateName,
    });
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", color: "whitesmoke" }}
    >
      <h1 style={{ color: "red" }}>COUNTRY STATE SELECTION</h1>
      <h2>Dependent Dropdown </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Country */}
        <select
          {...register("countryId")}
          onChange={handleCountryChange}
          defaultValue=""
        >
          <option value="">Select Country</option>
          {data.map((country) => (
            <option key={country.countryId} value={country.countryId}>
              {country.countryName}
            </option>
          ))}
        </select>

        {/* State */}
        <select
          {...register("stateName")}
          disabled={!states.length}
          defaultValue=""
          style={{ marginLeft: "10px" }}
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.stateId} value={state.stateName}>
              {state.stateName}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button
          type="submit"
          style={{ padding: "8px 18px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      <br />

      {/* Print Result */}
      {result && (
        <div>
          <h3>
            Country: {result.countryName} | State: {result.stateName}
          </h3>
        </div>
      )}
    </div>
  );
};
