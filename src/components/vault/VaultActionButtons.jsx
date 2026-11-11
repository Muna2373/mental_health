import { FiClock } from 'react-icons/fi';
import { FaFireFlameCurved } from "react-icons/fa6";

function VaultActionButtons({ onSeal, onBurnNow }) {
    return (
        <div className="actions-container">
            <button
                className="btn-primary"
                onClick={onSeal}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}
            >
                <FaFireFlameCurved /> Seal & Schedule Burn
            </button>

            <button onClick={onBurnNow} className="btn-secondary-burn">
                <FiClock /> Instant Incineration (Hold 2s to Burn Now)
            </button>

            <p className="actions-footer-text">
                NO RECORD RETAINED. NO SERVER BACKDOORS.
            </p>
        </div>
    );
}export default VaultActionButtons;