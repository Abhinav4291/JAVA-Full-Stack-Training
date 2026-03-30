import React from "react";
import "./App.css";
import EmployeeSkillTracker from "./components/EmployeeSkillTracker";
import EmployeeSkillTrackerModule from "./components/EmployeeSkillTrackerModule";
import StyledEmployeeSkillTracker from "./components/StyledEmployeeSkillTracker";

function App() {
  return (
    <div className="app-shell">
      <div className="app-grid">
        <section className="version-card">
          <p className="version-label">Plain CSS</p>
          <EmployeeSkillTracker />
        </section>
        <section className="version-card">
          <p className="version-label">CSS Modules</p>
          <EmployeeSkillTrackerModule />
        </section>
        <section className="version-card">
          <p className="version-label">Styled Components</p>
          <StyledEmployeeSkillTracker />
        </section>
      </div>
    </div>
  );
}

export default App;
