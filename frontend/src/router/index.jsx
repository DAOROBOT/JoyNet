import { BrowserRouter, Route, useRoutes } from "react-router-dom";
import LoginPage from  "./../pages/login";
import RegisterPage from  "./../pages/register";
import HomePage from  "./../pages/home";
import NotFoundPage from  "./../pages/notfound";
import ProtectedRoute from "./ProtectedRoute";
export default function Router() {
    const protectedRoutes = (element) => element;

    const homeRoutes = ['/', '/home'].map(path => ({path, element: protectedRoutes(<HomePage/>)}))
    const Routes = () => useRoutes(
    homeRoutes.concat([
        {path: "/login", element: <LoginPage/>},
        {path: "/register", element: <RegisterPage/>},
        {path: "*", element: <NotFoundPage/>},
    ]));
    return (
        <BrowserRouter>
        <Routes/>
        </BrowserRouter>
    );
}
