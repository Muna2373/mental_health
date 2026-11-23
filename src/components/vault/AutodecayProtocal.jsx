import { FiShield, FiCheckCircle, FiCircle } from 'react-icons/fi';
import { RiHourglass2Fill } from "react-icons/ri";

import './Vault.css';

export default function AutoDecayProtocol({ decayDays, setDecayDays }) {
    return (
        <div className="decay-card">
            <div className="decay-header">
                <div className="decay-title-group">
                    <RiHourglass2Fill style={{ color: '#FFB74D' }} />
                    <h3 style={{ fontSize: '16px', margin: 0 }}>Auto-Decay Protocol</h3>
                </div>
                <span className="decay-badge">Zero-Trace</span>
            </div>

            <div className="decay-options-grid">
                <div
                    onClick={() => setDecayDays(3)}
                    className={`decay-option-box ${decayDays === 3 ? 'active' : 'inactive'}`}
                >
                    <div className="decay-option-top" style={{ color: decayDays === 3 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                        <span>AUTO-BURN IN 3 DAYS</span>
                        {decayDays === 3 ? <FiCheckCircle /> : <FiCircle />}
                    </div>
                    <p className="decay-time-val">72:00:00</p>
                    <span className="decay-desc">Quick Mindful Release</span>
                </div>

                <div
                    onClick={() => setDecayDays(7)}
                    className={`decay-option-box ${decayDays === 7 ? 'active' : 'inactive'}`}
                >
                    <div className="decay-option-top" style={{ color: decayDays === 7 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                        <span>AUTO-BURN IN 7 DAYS</span>
                        {decayDays === 7 ? <FiCheckCircle /> : <FiCircle />}
                    </div>
                    <p className="decay-time-val">168:00:00</p>
                    <span className="decay-desc">Deep Somatic Processing</span>
                </div>
            </div>

            <div className="decay-footer-info">
                <FiShield /> End-to-end encrypted. Irreversible destruction at expiration.
            </div>
        </div>
    );
}