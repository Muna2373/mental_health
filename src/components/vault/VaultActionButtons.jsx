import { FiClock } from 'react-icons/fi';
import { FaFireFlameCurved } from "react-icons/fa6";
import styles from './Vault.module.css';

function VaultActionButtons({ onSeal, onBurnNow }) {
    return (
        <div className={styles.actionsContainer}>
            <button
                className="btn-primary"
                onClick={onSeal}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}
            >
                <FaFireFlameCurved /> Seal & Schedule Burn
            </button>

            <button onClick={onBurnNow} className={styles.btnSecondaryBurn}>
                <FiClock /> Instant Incineration (Hold 2s to Burn Now)
            </button>

            <p className={styles.actionsFooterText}>
                NO RECORD RETAINED. NO SERVER BACKDOORS.
            </p>
        </div>
    );
}

export default VaultActionButtons;