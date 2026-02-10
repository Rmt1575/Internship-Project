import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employee = () => {
  var title = "EMPLOYEES";

  var company = {
    name: "Grownited Private Limited",
    year: 2026,
  };

  const employees = [
    {
      id: 1,
      name: "Rutvik",
      age: 30,
      gender: "male",
      city: "Navsari",
      dep: "MERN-Stack Developer",
    },
    {
      id: 2,
      name: "Ritika",
      age: 26,
      gender: "female",
      city: "Ahmedabad",
      dep: "Frontend-Developer",
    },
    {
      id: 3,
      name: "Mox",
      age: 24,
      gender: "male",
      city: "Chikhli",
      dep: "Designer",
    },
    {
      id: 4,
      name: "Prathana",
      age: 20,
      gender: "female",
      city: "Khergam",
      dep: "Python-Developer",
    },
    {
      id: 5,
      name: "Mihir",
      age: 21,
      gender: "male",
      city: "Valsad",
      dep: "Android-Developer",
    },
  ];
  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Employee</h1>
      <EmployeeList title={title} company={company} employees={employees} />
    </div>
  );
};
