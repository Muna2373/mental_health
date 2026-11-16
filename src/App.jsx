
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Game from "./pages/Game";
import CalmPulse from "./pages/CalmPulse.jsx";
import Profile from "./pages/Profile";
import Loading from "./pages/Loading.jsx"
import BottomNavigation from "./components/BottomNavigation";
import LoginPage from "./components/login/LoginPage.jsx";

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    //Check Mock Login Token
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <LoginPage onLoginSuccess={() => setIsAuthenticated(true)}/>}/>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />}/>
                <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>}/>
                <Route path="/vault" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Vault /></ProtectedRoute>}/>
                <Route path="/game" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Game /></ProtectedRoute>}/>
                <Route path="/audio" element={<ProtectedRoute isAuthenticated={isAuthenticated}><CalmPulse /></ProtectedRoute>}/>
                <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile onLogout={() => setIsAuthenticated(false)} /></ProtectedRoute>}/>
                <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}/>
            </Routes>
            {isAuthenticated && <BottomNavigation />}
        </BrowserRouter>
    );
}

export default App;
