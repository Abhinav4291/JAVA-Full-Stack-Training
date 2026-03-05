import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import DepartmentsLayout from './pages/DepartmentsLayout';
import DepartmentsHome from './pages/DepartmentsHome';
import DepartmentDetails from './pages/DepartmentDetails';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const API_BASE = 'http://localhost:3001';

const credentials = [
  { username: 'hradmin', password: 'hr123', role: 'HR', employeeId: '102' },
  { username: 'abhinav', password: 'emp123', role: 'Employee', employeeId: '101' },
  { username: 'akshaya', password: 'design123', role: 'Employee', employeeId: '104' }
];

function App() {
  const [employees, setEmployees] = useState([]);
  const [dashboardStats, setDashboardStats] = useState({ openProjects: 0 });
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataError, setDataError] = useState('');

  const location = useLocation();
  const flashMessage = location.state?.message;
  const isLoggedIn = Boolean(authUser);
  const isHr = authUser?.role === 'HR';

  useEffect(() => {
    const loadData = async () => {
      try {
        setDataError('');
        const [employeesRes, statsRes] = await Promise.all([
          fetch(`${API_BASE}/employees`),
          fetch(`${API_BASE}/dashboardStats/main`)
        ]);

        if (!employeesRes.ok || !statsRes.ok) {
          throw new Error('Failed to load portal data from db.json server.');
        }

        const employeesData = await employeesRes.json();
        const statsData = await statsRes.json();

        setEmployees(employeesData);
        setDashboardStats({ openProjects: Number(statsData.openProjects) || 0 });
      } catch (error) {
        setDataError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleLogin = (username, password) => {
    const matchedUser = credentials.find(
      (record) => record.username === username && record.password === password
    );

    if (!matchedUser) {
      return { success: false, message: 'Invalid username or password.' };
    }

    setAuthUser({
      username: matchedUser.username,
      role: matchedUser.role,
      employeeId: matchedUser.employeeId
    });

    return { success: true };
  };

  const handleLogout = () => {
    setAuthUser(null);
  };

  const addEmployee = async (employee) => {
    const response = await fetch(`${API_BASE}/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee)
    });

    if (!response.ok) {
      throw new Error('Could not add employee.');
    }

    const created = await response.json();
    setEmployees((prev) => [...prev, created]);
  };

  const updateEmployee = async (id, updates) => {
    const response = await fetch(`${API_BASE}/employees/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      throw new Error('Could not update employee.');
    }

    const updated = await response.json();
    setEmployees((prev) => prev.map((employee) => (String(employee.id) === String(id) ? updated : employee)));
  };

  const deleteEmployee = async (id) => {
    const response = await fetch(`${API_BASE}/employees/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Could not remove employee.');
    }

    setEmployees((prev) => prev.filter((employee) => String(employee.id) !== String(id)));
  };

  const updateDashboardStats = async (nextStats) => {
    const response = await fetch(`${API_BASE}/dashboardStats/main`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nextStats)
    });

    if (!response.ok) {
      throw new Error('Could not update dashboard stats.');
    }

    const updated = await response.json();
    setDashboardStats({ openProjects: Number(updated.openProjects) || 0 });
  };

  return (
    <div className="app-shell">
      <div className="bg-glow bg-glow-left" />
      <div className="bg-glow bg-glow-right" />

      <Navbar authUser={authUser} onLogout={handleLogout} />

      <main className="content-wrap">
        {flashMessage ? <p className="flash-message">{flashMessage}</p> : null}
        {dataError ? <p className="form-error">{dataError}</p> : null}
        {isLoading ? <p className="editor-note">Loading portal data...</p> : null}

        {!isLoading ? (
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  employees={employees}
                  dashboardStats={dashboardStats}
                  onSaveDashboardStats={updateDashboardStats}
                  isHr={isHr}
                />
              }
            />
            <Route
              path="/employees"
              element={
                <Employees
                  employees={employees}
                  onAddEmployee={addEmployee}
                  onUpdateEmployee={updateEmployee}
                  onDeleteEmployee={deleteEmployee}
                  isHr={isHr}
                />
              }
            />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />}
            />

            <Route path="/departments" element={<DepartmentsLayout />}>
              <Route index element={<DepartmentsHome />} />
              <Route path=":deptId" element={<DepartmentDetails />} />
            </Route>

            <Route
              path="/profile/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile employees={employees} />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : null}
      </main>
    </div>
  );
}

export default App;
