import React from "react";

export const MapDemo8 = () => {
  var courses = [
    { id: 1, title: "ReactJS", duration: "3 Weeks", tech: "MERN" },
    { id: 2, title: "Django", duration: "2 Weeks", tech: "PYTHON" },
    { id: 3, title: "SpringBoot", duration: "4 Weeks", tech: "JAVA" },
    { id: 4, title: "NodeJS", duration: "5 Weeks", tech: "MERN" },
    { id: 5, title: "Flask", duration: "2 Weeks", tech: "PYTHON" },
    { id: 6, title: "JSP", duration: "2 Weeks", tech: "JAVA" },
    { id: 7, title: "MongoDB", duration: "3 Weeks", tech: "MERN" },
    { id: 8, title: "Express", duration: "2 Weeks", tech: "MERN" },
    { id: 9, title: "AngularJS", duration: "2 Weeks", tech: "MEAN" },
    { id: 10, title: "VueJS", duration: "3 Weeks", tech: "MEVN" },
  ];

  const getBgColor = (tech) => {
    switch (tech) {
      case "MERN":
        return "skyblue";
      case "MEAN":
        return "lightcoral";
      case "JAVA":
        return "lightgreen";
      case "PYTHON":
        return "lightyellow";
      case "MEVN":
        return "lightpink";
      default:
        return "black";
    }
  };
  return (
    <div style={{ color: "white" }}>
      <h1 style={{ textAlign: "center" }}>MAP DEMO 8</h1>

      <h3>Course Cards</h3>

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: "200px",
          }}
        >
          <h4 style={{backgroundColor: getBgColor(course.tech), color : "black"}}> {course.title} </h4>
          <p>Duration: {course.duration}</p>
          <p>Technology: {course.tech}</p>
        </div>
      ))}
    </div>
  );
};
