import { NavLink } from "react-router-dom";
import { Home, BookOpen, Gamepad2, Music, User } from "lucide-react";
import styles from "./BottomNavigation.module.css";

function getNavItemClass({ isActive }) {
    return isActive ? `${styles.navItem} ${styles.navItemActive}` : styles.navItem;
}

function BottomNavigation() {
    return (
        <nav className={styles.bottomNavigation}>
            <NavLink to="/home" className={getNavItemClass}><Home /><span>Home</span></NavLink>
            <NavLink to="/vault" className={getNavItemClass}><BookOpen /><span>Vault</span></NavLink>
            {/*<NavLink to="/game" className={getNavItemClass}><Gamepad2 /><span>Game</span></NavLink>*/}
            <NavLink to="/audio" className={getNavItemClass}><Music /><span>Audio</span></NavLink>
            <NavLink to="/profile" className={getNavItemClass}><User /><span>Profile</span></NavLink>
        </nav>
    );
}

export default BottomNavigation;
