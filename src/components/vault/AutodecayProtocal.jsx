import { FiShield, FiCheckCircle, FiCircle } from 'react-icons/fi';
import { RiHourglass2Fill } from "react-icons/ri";
import styles from './Vault.module.css';

export default function AutoDecayProtocol({ decayDays, setDecayDays }) {
    return (
        <div className={styles.decayCard}>
            <div className={styles.decayHeader}>
                <div className={styles.decayTitleGroup}>
                    <RiHourglass2Fill style={{ color: '#FFB74D' }} />
                    <h3 style={{ fontSize: '16px', margin: 0 }}>Auto-Decay Protocol</h3>
                </div>
                <span className={styles.decayBadge}>Zero-Trace</span>
            </div>

            <div className={styles.decayOptionsGrid}>
                <div
                    onClick={() => setDecayDays(3)}
                    className={`${styles.decayOptionBox} ${decayDays === 3 ? styles.decayOptionBoxActive : styles.decayOptionBoxInactive}`}
                >
                    <div className={styles.decayOptionTop} style={{ color: decayDays === 3 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                        <span>AUTO-BURN IN 3 DAYS</span>
                        {decayDays === 3 ? <FiCheckCircle /> : <FiCircle />}
                    </div>
                    <p className={styles.decayTimeVal}>72:00:00</p>
                    <span className={styles.decayDesc}>Quick Mindful Release</span>
                </div>

                <div
                    onClick={() => setDecayDays(7)}
                    className={`${styles.decayOptionBox} ${decayDays === 7 ? styles.decayOptionBoxActive : styles.decayOptionBoxInactive}`}
                >
                    <div className={styles.decayOptionTop} style={{ color: decayDays === 7 ? 'var(--accent-orange)' : 'var(--text-muted)' }}>
                        <span>AUTO-BURN IN 7 DAYS</span>
                        {decayDays === 7 ? <FiCheckCircle /> : <FiCircle />}
                    </div>
                    <p className={styles.decayTimeVal}>168:00:00</p>
                    <span className={styles.decayDesc}>Deep Somatic Processing</span>
                </div>
            </div>

            <div className={styles.decayFooterInfo}>
                <FiShield /> End-to-end encrypted. Irreversible destruction at expiration.
            </div>
        </div>
    );
}