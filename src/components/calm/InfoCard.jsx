import { Globe } from 'lucide-react';
import styles from './CalmPulse.module.css';

function InfoCard() {
    return (
        <div className={styles["info-card"]}>
            <div className={styles["info-content-wrapper"]}>
                <Globe size={18} className={styles["info-icon"]} />
                <div>
                    <h4 className={styles["info-heading"]}>Parasympathetic Pathway Active</h4>
                    <p className={styles["info-text"]}>
                        Prolonged diaphragmatic pauses increase capillary oxygenation. Gentle somatic tingling in fingertips is natural.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;