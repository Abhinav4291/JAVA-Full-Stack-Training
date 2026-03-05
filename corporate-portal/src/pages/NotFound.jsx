import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="page not-found">
      <h2>404</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/dashboard">Back to Dashboard</Link>
    </section>
  );
}

export default NotFound;
