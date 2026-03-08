import calculateTax from '../services/tax.js';

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(amount);
}

export default function PayrollCard({ employee }) {
  const tax = calculateTax(employee.salary);
  const netSalary = employee.salary - tax;
  const taxRate = ((tax / employee.salary) * 100).toFixed(2);

  return (
    <article className="payroll-card">
      <header className="card-header">
        <div>
          <p className="eyebrow">Payroll Profile</p>
          <h2>{employee.name}</h2>
        </div>
        <span className="badge">{employee.department}</span>
      </header>

      <section className="grid">
        <div className="metric">
          <span>Employee ID</span>
          <strong>{employee.id}</strong>
        </div>
        <div className="metric">
          <span>Annual Salary</span>
          <strong>{formatCurrency(employee.salary)}</strong>
        </div>
        <div className="metric">
          <span>Estimated Tax</span>
          <strong>{formatCurrency(tax)}</strong>
        </div>
        <div className="metric">
          <span>Net Annual Pay</span>
          <strong>{formatCurrency(netSalary)}</strong>
        </div>
      </section>

      <footer className="footer-note">
        Effective tax rate: <b>{taxRate}%</b>
      </footer>
    </article>
  );
}
