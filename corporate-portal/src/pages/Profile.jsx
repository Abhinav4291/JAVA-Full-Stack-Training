import { useParams } from 'react-router-dom';

function Profile({ employees }) {
  const { id } = useParams();
  const employee = employees.find((item) => String(item.id) === String(id));

  if (!employee) {
    return (
      <section className="page">
        <h2>Profile</h2>
        <p>No employee found with ID: {id}</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h2>Profile Details</h2>
      <article className="profile-card">
        <p className="employee-id">Employee ID: {employee.id}</p>
        <h3>{employee.name}</h3>
        <p>{employee.role}</p>
        <span>{employee.department}</span>
      </article>
    </section>
  );
}

export default Profile;
