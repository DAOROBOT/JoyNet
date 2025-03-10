import { createRoot } from 'react-dom/client';
import Home from './pages/home';
import { RouterProvider } from "react-router-dom";
import Router from "./router";
import "./index.css";

createRoot(document.getElementById('root')).render(
    <Router/>
)
