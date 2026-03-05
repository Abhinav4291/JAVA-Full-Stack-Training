import { useEffect, useState } from 'react';

function StatCard({ label, value }) {
  return (
    <article className="stat-card">
      <p>{label}</p>
      <h3>{value}</h3>
    </article>
  );
}

function Dashboard({ employees, dashboardStats, onSaveDashboardStats, isHr }) {
  const engineeringCount = employees.filter((employee) => employee.department === 'Engineering').length;
  const departmentsCount = new Set(employees.map((employee) => employee.department)).size;
  const [openProjectsInput, setOpenProjectsInput] = useState(dashboardStats.openProjects);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    setOpenProjectsInput(dashboardStats.openProjects);
  }, [dashboardStats.openProjects]);

  const saveStats = async () => {
    try {
      setSaveError('');
      await onSaveDashboardStats({ openProjects: Number(openProjectsInput) || 0 });
    } catch (error) {
      setSaveError(error.message);
    }
  };

  return (
    <section className="page page-dashboard">
      <div className="hero-panel">
        <h2>Welcome back to your corporate portal</h2>
        <p>Track people, teams, and key updates from one place.</p>
      </div>

      <div className="stats-grid">
        <StatCard label="Total Employees" value={employees.length} />
        <StatCard label="Departments" value={departmentsCount} />
        <StatCard label="Engineering Team" value={engineeringCount} />
        <StatCard label="Open Projects" value={dashboardStats.openProjects} />
      </div>

      {isHr ? (
        <section className="editor-panel">
          <h3>Dashboard Stats</h3>
          <div className="form-inline-grid">
            <label>
              Open Projects
              <input
                type="number"
                min="0"
                value={openProjectsInput}
                onChange={(event) => setOpenProjectsInput(event.target.value)}
              />
            </label>
          </div>
          <button type="button" className="primary-action" onClick={saveStats}>
            Save Dashboard
          </button>
          {saveError ? <p className="form-error">{saveError}</p> : null}
          <p className="editor-note">Only HR can edit dashboard business metrics.</p>
        </section>
      ) : null}
    </section>
  );
}

export default Dashboard;
