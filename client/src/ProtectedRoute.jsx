import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (!isAuthenticated && location.pathname === "/lead") {
        return <Navigate to="/" replace />;
    }

    if (isAuthenticated && location.pathname === "/") {
        return <Navigate to="/lead" replace />;
    }

    return children;
};

export default ProtectedRoute;
