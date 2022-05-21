import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = sessionStorage.getItem("isAuth")
    console.log("this", user)
    if (user !== "true") {
        return (
                <Navigate to="/login" replace />
        );
    }
    return children;
};

export default ProtectedRoute