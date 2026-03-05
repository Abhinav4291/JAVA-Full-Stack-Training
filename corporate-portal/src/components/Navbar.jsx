import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ authUser, onLogout }) {
  const navigate = useNavigate();
  const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');
  const profileId = authUser?.employeeId || '101';

  return (
    <header className="topbar">
      <div className="brand-wrap">
        <p className="brand-kicker">Corporate Suite</p>
        <h1 className="brand-title">Corporate Portal</h1>
      </div>

      <nav className="nav-menu">
        <NavLink to="/dashboard" className={navClass}>
          Dashboard
        </NavLink>
        <NavLink to="/employees" className={navClass}>
          Employees
        </NavLink>
        <NavLink to="/departments" className={navClass}>
          Departments
        </NavLink>
        <NavLink to={`/profile/${profileId}`} className={navClass}>
          Profile
        </NavLink>
      </nav>

      <div className="auth-area">
        {authUser ? (
          <>
            <p className="user-pill">
              {authUser.username} <span>{authUser.role}</span>
            </p>
            <button className="auth-btn logout" onClick={onLogout}>
              Log Out
            </button>
          </>
        ) : (
          <button className="auth-btn login" onClick={() => navigate('/login')}>
            Log In
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
