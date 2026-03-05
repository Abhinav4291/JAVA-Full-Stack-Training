import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login({ onLogin, isLoggedIn }) {
  const [formData, setFormData] = useState({ loginId: '', loginSecret: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const fromPath = location.state?.from || '/dashboard';

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = onLogin(formData.loginId.trim(), formData.loginSecret);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(fromPath, { replace: true });
  };

  return (
    <section className="page login-page">
      <h2>Sign In</h2>
      <p className="page-subtitle">Use your corporate credentials to access protected routes.</p>

      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input
            type="text"
            name="loginId"
            value={formData.loginId}
            onChange={handleChange}
            placeholder="Enter username"
            autoComplete="off"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="loginSecret"
            value={formData.loginSecret}
            onChange={handleChange}
            placeholder="Enter password"
            autoComplete="new-password"
            required
          />
        </label>

        {error ? <p className="form-error">{error}</p> : null}

        <button type="submit" className="auth-btn login login-submit">
          Log In
        </button>
      </form>
    </section>
  );
}

export default Login;
