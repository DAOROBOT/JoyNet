import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../context";

export default function ProtectedRoute({children}) {
    let location = useLocation();

    if (!AuthContext.isLogin()) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
    return children
};
