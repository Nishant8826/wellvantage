import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated && location.pathname === "/lead") {
        return <Navigate to="/" replace />;
    }

    if (isAuthenticated && location.pathname === "/") {
        return <Navigate to="/lead" replace />;
    }

    return children;
};

export default ProtectedRoute;
