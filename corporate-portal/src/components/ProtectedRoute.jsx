import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          message: 'Please log in to view profile.',
          from: location.pathname
        }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;
