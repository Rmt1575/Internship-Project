import React from "react";

export const EmployeeList = (props) => {
  console.log("emplist ", props);
  return (
    <div style={{ color: "whitesmoke", textAlign: "center" }}>
      <h2 style={{ color: "white" }}>Employee - List</h2>
      {props.title}
      <h2>{props.company.name}</h2>
      <h2>{props.company.year}</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th style={{ color: "pink" }}>ID</th>
            <th style={{ color: "pink" }}>NAME</th>
            <th style={{ color: "pink" }}>AGE</th>
            <th style={{ color: "pink" }}>GENDER</th>
            <th style={{ color: "pink" }}>CITY</th>
            <th style={{ color: "pink" }}>DEPARTMENT</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.gender}</td>
                <td>{emp.city}</td>
                <td>{emp.dep}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
