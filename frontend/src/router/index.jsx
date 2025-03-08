import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from  "./../pages/login";
import RegisterPage from  "./../pages/register";
import HomePage from  "./../pages/home";
import NotFoundPage from  "./../pages/notfound";
import ProtectedRoute from "./ProtectedRoute";
export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/home" element={
                <ProtectedRoute>
                <HomePage/>
                </ProtectedRoute>
            }/>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        </BrowserRouter>
    );
}
