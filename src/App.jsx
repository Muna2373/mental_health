
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
import RegistrationPage from "./components/login/RegistrationPage.jsx"

function getStorageToken() {
    return localStorage.getItem("token") || sessionStorage.getItem("token");
}

function getStorageUser() {
    const raw = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(() => !!getStorageToken());
    const [currentUser, setCurrentUser] = useState(() => getStorageUser());

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

function handleAuthSuccess(userData) {
    setIsAuthenticated(true);
    setCurrentUser(userData || getStorageUser());
    }

function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("users");
    setCurrentUser(null);
    setIsAuthenticated(false);
}

if (isLoading) {
        return <Loading />;
    }

return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={isAuthenticated ? (<Navigate to="/home" replace />) : (<LoginPage onLoginSuccess={handleAuthSuccess} />)}/>
                <Route path="/register" element={isAuthenticated ? (<Navigate to="/home" replace />) : (<RegistrationPage onAuthSuccess={handleAuthSuccess} />)}/>
                <Route path="/" element={isAuthenticated ? (<Navigate to="/home" replace />) : (<Navigate to="/login" replace />)}/>
                <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home user={currentUser} /></ProtectedRoute>}/>
                <Route path="/vault" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Vault user={currentUser} /></ProtectedRoute>}/>
                <Route path="/game" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Game user={currentUser} /></ProtectedRoute>}/>
                <Route path="/audio" element={<ProtectedRoute isAuthenticated={isAuthenticated}><CalmPulse user={currentUser} /></ProtectedRoute>}/>
                <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile user={currentUser} onLogout={handleLogout} /></ProtectedRoute>}/>
                <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}/>
            </Routes>
            {isAuthenticated && <BottomNavigation />}
        </BrowserRouter>
    );
}

export default App;