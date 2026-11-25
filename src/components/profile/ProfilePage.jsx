import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiBell, FiShield, FiMoon, FiLogOut, FiAward } from 'react-icons/fi';
import { useAuth } from '../../context/authContext.js';
import styles from './ProfilePage.module.css';

export default function ProfilePage({ user, onLogout }) {
    const [notifications, setNotifications] = useState(true);
    const [biometric, setBiometric] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const navigate = useNavigate();
    const { user: authUser, logout } = useAuth();

    const activeUser = user || authUser;
    const displayName = activeUser?.name || "Member";

    const handleLogout = () => {
        logout();
        onLogout?.();
        navigate("/login", { replace: true });
    };

    return (
        <div className={styles.profileContainer}>
            <h1 className={styles.profileTitle}>Mindful Profile</h1>

            <div className={styles.profileUserCard}>
                <div className={styles.profileAvatarLarge}>
                    <FiUser />
                </div>
                <div className={styles.profileUserInfo}>
                    <h2>{displayName}</h2>
                    <p>{activeUser?.email || "Level 3 • Inner Peace Seeker"}</p>
                    <span className={styles.profileBadge}>
                        ● Active Member <FiAward />
                    </span>
                </div>
            </div>

            <div className={styles.profileStatsGrid}>
                <div className={styles.profileStatBox}>
                    <p className={styles.profileStatLabel}>Streak</p>
                    <p className={`${styles.profileStatValue} ${styles.statStreak}`}>🔥 7 Days</p>
                </div>
                <div className={styles.profileStatBox}>
                    <p className={styles.profileStatLabel}>Total Time</p>
                    <p className={`${styles.profileStatValue} ${styles.statTime}`}>⏱️ 145m</p>
                </div>
                <div className={styles.profileStatBox}>
                    <p className={styles.profileStatLabel}>Vault Burns</p>
                    <p className={`${styles.profileStatValue} ${styles.statVault}`}>⚡ 12</p>
                </div>
            </div>

            <p className={styles.profileSectionTitle}>Preferences & Security</p>
            <div className={styles.profileSettingsCard}>
                <div className={styles.profileSettingItem}>
                    <div className={styles.settingInfo}>
                        <FiBell className={styles.settingIcon} />
                        <span>Daily Reminders</span>
                    </div>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>

                <div className={styles.profileSettingItem}>
                    <div className={styles.settingInfo}>
                        <FiShield className={styles.settingIcon} />
                        <span>Biometric Support</span>
                    </div>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={biometric}
                            onChange={() => setBiometric(!biometric)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>

                <div className={styles.profileSettingItem}>
                    <div className={styles.settingInfo}>
                        <FiMoon className={styles.settingIcon} />
                        <span>Deep Dark Theme</span>
                    </div>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>

            <button className={styles.btnSignout} onClick={handleLogout}>
                <FiLogOut /> Sign Out
            </button>
        </div>
    );
}