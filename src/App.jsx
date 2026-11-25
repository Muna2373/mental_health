
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Game from "./pages/Game";
import CalmPulse from "./pages/CalmPulse.jsx";
import Profile from "./pages/Profile";
import Loading from "./pages/Loading.jsx";
import BottomNavigation from "./components/BottomNavigation";
import LoginPage from "./components/login/LoginPage.jsx";
import RegistrationPage from "./components/login/RegistrationPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { useAuth } from "./context/authContext.js";

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export function AppContent() {
    const [isLoading, setIsLoading] = useState(true);
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={isAuthenticated ? (<Navigate to="/home" replace />) : (<LoginPage />)} />
                <Route path="/register" element={isAuthenticated ? (<Navigate to="/home" replace />) : (<RegistrationPage />)} />
                <Route path="/" element={isAuthenticated ? (<Navigate to="/home" replace />) : (<Navigate to="/login" replace />)} />
                <Route path="/home" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home /></ProtectedRoute>} />
                <Route path="/vault" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Vault /></ProtectedRoute>} />
                <Route path="/game" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Game /></ProtectedRoute>} />
                <Route path="/audio" element={<ProtectedRoute isAuthenticated={isAuthenticated}><CalmPulse /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} />
            </Routes>
            {isAuthenticated && <BottomNavigation />}
        </BrowserRouter>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;