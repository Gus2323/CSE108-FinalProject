import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ role, children, allowed }) => {
  return allowed.includes(role) ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
