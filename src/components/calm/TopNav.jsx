import { NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft, X, User } from "lucide-react";
import "./CalmPulse.css";

function TopNav() {
    const navigate = useNavigate();

    return (
        <header className="top-navigation">
            <div className="top-action-bar">
                <button onClick={() => navigate(-1)} className="action-btn" aria-label="Go back">
                    <ArrowLeft size={20} />
                </button>

                <h1 className="title">3M SANCTUARY</h1>

                <div className="right-actions">
                    <NavLink to="/home" className="action-btn" aria-label="Close session">
                        <X size={20} />
                    </NavLink>
                    <NavLink to="/profile" className="profile-btn" aria-label="Profile">
                        <User size={18} />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default TopNav;