
import { NavLink } from "react-router-dom";
import { Home, BookOpen, Gamepad2, Music, User } from "lucide-react";
import "./BottomNavigation.css";

function BottomNavigation() {
    return (
        <nav className="bottom-navigation">

            <NavLink to="/home" className="nav-item">
                <Home />
                <span>Home</span>
            </NavLink>

            <NavLink to="/vault" className="nav-item">
                <BookOpen />
                <span>Vault</span>
            </NavLink>

            <NavLink to="/game" className="nav-item">
                <Gamepad2 />
                <span>Game</span>
            </NavLink>

            <NavLink to="/audio" className="nav-item">
                <Music />
                <span>Audio</span>
            </NavLink>

            <NavLink to="/profile" className="nav-item">
                <User />
                <span>Profile</span>
            </NavLink>

        </nav>
    );
}

export default BottomNavigation;
