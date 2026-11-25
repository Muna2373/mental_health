import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft, X, User } from "lucide-react";
import styles from "./TopNav.module.css";

function TopNav() {
    const navigate = useNavigate();

    return (
        <header className={styles.topNavigation}>
            <div className={styles.topActionBar}>
                <button onClick={() => navigate(-1)} className={styles.actionBtn} aria-label="Go back">
                    <ArrowLeft size={20} />
                </button>

                <h1 className={styles.title}>3M SANCTUARY</h1>

                <div className={styles.rightActions}>
                    <NavLink to="/home" className={styles.actionBtn} aria-label="Close session">
                        <X size={20} />
                    </NavLink>
                    <NavLink to="/profile" className={styles.profileBtn} aria-label="Profile">
                        <User size={18} />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default TopNav;
