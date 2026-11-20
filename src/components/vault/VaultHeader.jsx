import { FiArrowLeft } from 'react-icons/fi';
import { FaFireFlameCurved } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import './Vault.css';

export default function VaultHeader() {
    const navigate = useNavigate();

    return (
        <div className="vault-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className="vault-back-btn" onClick={() => navigate(-1)}>
                    <FiArrowLeft />
                </button>
                <div className="vault-title-group">
                    <h2>3M Sanctuary</h2>
                    <span className="vault-subtitle">RELEASE & BURN</span>
                </div>
            </div>

            <div className="vault-streak-badge">
                <FaFireFlameCurved /> 2 Days
            </div>
        </div>
    );
}