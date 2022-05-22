import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = sessionStorage.getItem("isAuth")

    if (user !== "true") {
        sessionStorage.setItem("login", false)
        return (
            <Navigate to="/login" replace />
        );
    }
    return children;
};

export default ProtectedRoute