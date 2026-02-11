import { useState } from "react";

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

  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (e) => {
    const countryId = parseInt(e.target.value);
    setSelectedCountry(countryId);

    const country = data.find((c) => c.countryId === countryId);
    setStates(country ? country.states : []);
    setSelectedState("");
  };

  // Get selected country object
  const selectedCountryObj = data.find((c) => c.countryId === selectedCountry);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", color: "whitesmoke" }}
    >
      <h1 style={{ color: "red" }}>COUNTRY STATE SELECTION</h1>
      <h2>Dependent Dropdown</h2>

      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">Select Country</option>
        {data.map((country) => (
          <option key={country.countryId} value={country.countryId}>
            {country.countryName}
          </option>
        ))}
      </select>

      <br />
      <br />

      <select
        onChange={(e) => setSelectedState(e.target.value)}
        value={selectedState}
        disabled={!states.length}
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

      {selectedCountry && selectedState && (
        <div>
          <h3>Selected Country: {selectedCountryObj?.countryName}</h3>
          <h3>Selected State: {selectedState}</h3>
        </div>
      )}
    </div>
  );
};
