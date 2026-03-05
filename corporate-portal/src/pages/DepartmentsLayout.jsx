import { NavLink, Outlet } from 'react-router-dom';

const departmentLinks = [
  { slug: 'hr', label: 'Human Resources' },
  { slug: 'finance', label: 'Finance' },
  { slug: 'engineering', label: 'Engineering' },
  { slug: 'design', label: 'Design' }
];

function DepartmentsLayout() {
  const linkClass = ({ isActive }) => (isActive ? 'sub-link active' : 'sub-link');

  return (
    <section className="page">
      <h2>Departments</h2>
      <p className="page-subtitle">Explore nested routes for each department.</p>

      <div className="nested-wrap">
        <aside className="subnav">
          {departmentLinks.map((department) => (
            <NavLink key={department.slug} to={department.slug} className={linkClass}>
              {department.label}
            </NavLink>
          ))}
        </aside>

        <div className="nested-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default DepartmentsLayout;
