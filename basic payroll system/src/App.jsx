import { useState } from 'react';
import PayrollCard from './components/PayrollCard.jsx';
import { getAllEmployeeIds, getEmployeeDetails } from './services/employee.js';

export default function App() {
  const employeeIds = getAllEmployeeIds();
  const [selectedId, setSelectedId] = useState(employeeIds[0]);

  const employee = getEmployeeDetails(selectedId);

  return (
    <main className="app-shell">
      <section className="panel">
        <header className="panel-header">
          <p className="kicker">Payroll System</p>
          <h1>Compensation Intelligence Dashboard</h1>
        </header>

        <label className="selector" htmlFor="employeeId">
          Select Employee
          <select
            id="employeeId"
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
          >
            {employeeIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </label>

        <PayrollCard employee={employee} />
      </section>
    </main>
  );
}
