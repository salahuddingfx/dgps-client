import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedStudentRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.studentAuth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/student/login" state={{ from: location }} replace />;
  }

  return children;
}
