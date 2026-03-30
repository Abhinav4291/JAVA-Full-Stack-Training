import React, { useState } from "react";
import "./EmployeeSkillTracker.css";

function EmployeeSkillTracker() {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || skill === "") {
      setError("Please fill out all fields.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setSkill("");
    setSubmitted(false);
    setError("");
  };

  return (
    <div className="container">
      <h3>Employee Skill Tracker</h3>

      <form className="tracker-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

        <div className="button-row">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}

      {submitted && (
        <div className="result">
          <p>Name: {name}</p>
          <p>Skill: {skill}</p>

          {skill.toLowerCase() === "react" ? (
            <p>Excellent choice! React is in high demand.</p>
          ) : (
            <p>Great! Keep sharpening your skills.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeeSkillTracker;
