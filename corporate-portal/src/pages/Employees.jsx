import { useState } from 'react';
import { Link } from 'react-router-dom';

const emptyEmployee = {
  name: '',
  role: '',
  department: ''
};

function Employees({ employees, onAddEmployee, onUpdateEmployee, onDeleteEmployee, isHr }) {
  const [newEmployee, setNewEmployee] = useState(emptyEmployee);
  const [editingId, setEditingId] = useState('');
  const [draftEmployee, setDraftEmployee] = useState(emptyEmployee);
  const [saveError, setSaveError] = useState('');

  const handleNewInput = (event) => {
    const { name, value } = event.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleDraftInput = (event) => {
    const { name, value } = event.target;
    setDraftEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const addEmployee = async (event) => {
    event.preventDefault();
    if (!newEmployee.name || !newEmployee.role || !newEmployee.department) {
      return;
    }

    try {
      setSaveError('');
      const maxId = employees.reduce((max, employee) => Math.max(max, Number(employee.id)), 100);
      const nextId = String(maxId + 1);
      await onAddEmployee({ id: nextId, ...newEmployee });
      setNewEmployee(emptyEmployee);
    } catch (error) {
      setSaveError(error.message);
    }
  };

  const beginEdit = (employee) => {
    setEditingId(String(employee.id));
    setDraftEmployee({
      name: employee.name,
      role: employee.role,
      department: employee.department
    });
  };

  const saveEdit = async (id) => {
    if (!draftEmployee.name || !draftEmployee.role || !draftEmployee.department) {
      return;
    }

    try {
      setSaveError('');
      await onUpdateEmployee(id, draftEmployee);
      setEditingId('');
      setDraftEmployee(emptyEmployee);
    } catch (error) {
      setSaveError(error.message);
    }
  };

  const removeEmployee = async (id) => {
    try {
      setSaveError('');
      await onDeleteEmployee(id);
      if (editingId === String(id)) {
        setEditingId('');
      }
    } catch (error) {
      setSaveError(error.message);
    }
  };

  return (
    <section className="page">
      <h2>Employees</h2>
      <p className="page-subtitle">Browse the employee directory and jump to profile details.</p>

      {isHr ? (
        <form className="editor-panel" onSubmit={addEmployee}>
          <h3>Add Employee</h3>
          <div className="form-inline-grid">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleNewInput}
                placeholder="Employee name"
                required
              />
            </label>
            <label>
              Role
              <input
                type="text"
                name="role"
                value={newEmployee.role}
                onChange={handleNewInput}
                placeholder="Role"
                required
              />
            </label>
            <label>
              Department
              <input
                type="text"
                name="department"
                value={newEmployee.department}
                onChange={handleNewInput}
                placeholder="Department"
                required
              />
            </label>
          </div>
          <button type="submit" className="primary-action">
            Add Employee
          </button>
          {saveError ? <p className="form-error">{saveError}</p> : null}
        </form>
      ) : (
        <p className="editor-note">Log in as HR to add, edit, or remove employees.</p>
      )}

      <div className="employee-grid">
        {employees.map((employee) => {
          const isEditing = editingId === String(employee.id);

          return (
            <article key={employee.id} className="employee-card">
              <p className="employee-id">#{employee.id}</p>

              {isEditing ? (
                <div className="card-form">
                  <input name="name" value={draftEmployee.name} onChange={handleDraftInput} />
                  <input name="role" value={draftEmployee.role} onChange={handleDraftInput} />
                  <input name="department" value={draftEmployee.department} onChange={handleDraftInput} />
                  <div className="card-actions">
                    <button className="small-btn" type="button" onClick={() => saveEdit(employee.id)}>
                      Save
                    </button>
                    <button className="small-btn ghost" type="button" onClick={() => setEditingId('')}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{employee.name}</h3>
                  <p>{employee.role}</p>
                  <span>{employee.department}</span>
                  <Link to={`/profile/${employee.id}`}>View Profile</Link>

                  {isHr ? (
                    <div className="card-actions">
                      <button className="small-btn" type="button" onClick={() => beginEdit(employee)}>
                        Edit
                      </button>
                      <button className="small-btn danger" type="button" onClick={() => removeEmployee(employee.id)}>
                        Remove
                      </button>
                    </div>
                  ) : null}
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Employees;
