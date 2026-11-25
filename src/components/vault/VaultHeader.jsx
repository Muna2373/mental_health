import { FiArrowLeft } from 'react-icons/fi';
import { FaFireFlameCurved } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import styles from './Vault.module.css';

export default function VaultHeader() {
    const navigate = useNavigate();

    return (
        <div className={styles.vaultHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button className={styles.vaultBackBtn} onClick={() => navigate(-1)}>
                    <FiArrowLeft />
                </button>
                <div className={styles.vaultTitleGroup}>
                    <h2>3M Sanctuary</h2>
                    <span className={styles.vaultSubtitle}>RELEASE & BURN</span>
                </div>
            </div>

            <div className={styles.vaultStreakBadge}>
                <FaFireFlameCurved /> 2 Days
            </div>
        </div>
    );
}