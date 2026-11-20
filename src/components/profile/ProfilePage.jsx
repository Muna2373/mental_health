import { useState } from 'react';
import { FiUser, FiBell, FiShield, FiMoon, FiLogOut, FiAward } from 'react-icons/fi';
import '/src/components/profile/ProfilePage.css';

export default function ProfilePage( { user, onLogout }) {
    const [notifications, setNotifications] = useState(true);
    const [biometric, setBiometric] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    const storedRaw = localStorage.getItem("user") || sessionStorage.getItem("user");
    let storedUser = null;
    if (storedRaw) {
        try { storedUser = JSON.parse(storedRaw);
        } catch { storedUser = null;}
    }

    const activeUser = user || storedUser;
    const displayName = activeUser?.name || "Member";
    {/*const displayName = user?.name || "Muath";*/}

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        onLogout?.();
        window.location.href = "/login";
        {/*navigate("/login", { replace: true }); */}
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">Mindful Profile</h1>

            <div className="profile-user-card">
                <div className="profile-avatar-large">
                    <FiUser />
                </div>
                <div className="profile-user-info">
                    <h2>{displayName}</h2>
                    <p>{activeUser?.email || "Level 3 • Inner Peace Seeker"}</p>
                    <span className="profile-badge">
            ● Active Member <FiAward />
                    </span>
                </div>
            </div>

            <div className="profile-stats-grid">
                <div className="profile-stat-box">
                    <p className="profile-stat-label">Streak</p>
                    <p className="profile-stat-value stat-streak">🔥 7 Days</p>
                </div>
                <div className="profile-stat-box">
                    <p className="profile-stat-label">Total Time</p>
                    <p className="profile-stat-value stat-time">⏱️ 145m</p>
                </div>
                <div className="profile-stat-box">
                    <p className="profile-stat-label">Vault Burns</p>
                    <p className="profile-stat-value stat-vault">⚡ 12</p>
                </div>
            </div>

            <p className="profile-section-title">Preferences & Security</p>
            <div className="profile-settings-card">
                <div className="profile-setting-item">
                    <div className="setting-info">
                        <FiBell className="setting-icon" />
                        <span>Daily Reminders</span>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="profile-setting-item">
                    <div className="setting-info">
                        <FiShield className="setting-icon" />
                        <span>Biometric Support</span>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={biometric}
                            onChange={() => setBiometric(!biometric)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className="profile-setting-item">
                    <div className="setting-info">
                        <FiMoon className="setting-icon" />
                        <span>Deep Dark Theme</span>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

            <button className="btn-primary btn-signout" onClick={handleLogout}>
                <FiLogOut /> Sign Out
            </button>
        </div>
    );
}