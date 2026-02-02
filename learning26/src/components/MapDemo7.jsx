import React from "react";

export const MapDemo7 = () => {
  var students = [
    { id: 1, name: "Mihir", course: "MERN", age: 21 , gender: "male" },
    { id: 2, name: "Riya", course: "Java", age: 22 , gender: "female" },
    { id: 3, name: "Rushang", course: "MERN", age: 20 , gender: "male" },
    { id: 4, name: "Neha", course: "ReactJS", age: 23 , gender: "female" },
    { id: 5, name: "Mux", course: "NodeJS", age: 22 , gender: "male" },
  ];

  return (
    <div>
      <h3>Student Table</h3>
      <table class="table table-dark" border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td style={{color:s.gender == "female" ? "pink" : "lightblue"}}>{s.name}</td>
              <td style={{backgroundColor:s.course == "MERN" && "lightgreen"}}>{s.course}</td>
              <td style={{backgroundColor:s.age>21 && "lightskyblue"}}>{s.age}</td>
              <td style={{backgroundColor:s.gender == "female" && "pink"}}>{s.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
