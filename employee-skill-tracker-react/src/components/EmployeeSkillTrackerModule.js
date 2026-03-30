import React, { useState } from "react";
import styles from "./EmployeeSkillTracker.module.css";

function EmployeeSkillTrackerModule() {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !skill) {
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
    <div className={styles.container}>
      <h3 className={styles.heading}>Employee Skill Tracker</h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Enter Skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />

        <div className={styles.buttonRow}>
          <button className={styles.button} type="submit">Submit</button>
          <button className={styles.button} type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {submitted && (
        <div className={styles.result}>
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

export default EmployeeSkillTrackerModule;
