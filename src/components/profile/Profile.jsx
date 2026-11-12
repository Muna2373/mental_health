import { useState } from 'react';
import { FiUser, FiBell, FiShield, FiMoon, FiLogOut, FiAward } from 'react-icons/fi';
import './Profile.css';

export default function ProfilePage() {
    const [notifications, setNotifications] = useState(true);
    const [biometric, setBiometric] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="profile-container">
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>
                Mindful Profile
            </h1>

            <div className="profile-user-card">
                <div className="profile-avatar-large">
                    <FiUser/>
                </div>
                <div className="profile-user-info">
                    <h2>Muath</h2>
                    <p>Level 3 • Inner Peace Seeker</p>
                    <span style={{ fontSize: '10px', color: 'var(--accent-orange)', background: 'rgba(255,87,34,0.1)', padding: '2px 8px', borderRadius: '8px', display: 'inline-block', marginTop: '6px' }}>
            ● Active Member <FiAward/>
          </span>
                </div>
            </div>

            <div className="profile-stats-grid">
                <div className="profile-stat-box">
                    <p className="profile-stat-label">Streak</p>
                    <p className="profile-stat-value" style={{ color: '#FF5722' }}>🔥 7 Days</p>
                </div>
                <div className="profile-stat-box">
                    <p className="profile-stat-label">Total Time</p>
                    <p className="profile-stat-value" style={{ color: '#00E676' }}>⏱️ 145m</p>
                </div>
                <div className="profile-stat-box">
                    <p className="profile-stat-label">Vault Burns</p>
                    <p className="profile-stat-value" style={{ color: '#FFB74D' }}>⚡ 12</p>
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

            <button
                className="btn-primary"
                style={{ backgroundColor: 'transparent', border: '1px solid rgba(255, 87, 34, 0.4)', color: '#FF5722', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={() => alert('Logged out successfully')}
            >
                <FiLogOut /> Sign Out
            </button>

        </div>
    );
}