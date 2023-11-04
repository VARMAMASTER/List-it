import React from "react";
import "../Css/componentStyles/aboutapp.css";
import Navbar from "./Navbar";
export default function AboutDeveloper() {
  return (
    <>
      <Navbar />
      <div className="Aboutapp">
        <h1>About Developer</h1>
        <div className="card">
          <div className="image"></div>
          <div className="about">
            <p>
              Hey there! I'm Sai Kiran Varma, final yaer undergrad at IIIT
              Jabalpur, with Highly skilled full-stack MERN developer with a
              passion for leveraging the latest techniques to build intelligent
              and efficient web applications. Proficient in programming
              languages such as Python, C++, and JavaScript, as well as
              frameworks including React.js, Bootstrap, and tailwind CSS.
              Experienced in building scalable and efficient APIs using Node.js
              and databases like PostgreSQL, and MongoDB. Deep understanding of
              machine learning concepts and libraries such as sci-kit-learn,
              Skilled in Git, Docker, and AWS, and constantly exploring new
              technologies and techniques to stay at the forefront of the
              rapidly evolving software industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
