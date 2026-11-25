import styles from "./CalmPulse.module.css";

function ModeBanner() {
    return (
        <div className={styles["mode-banner-container"]}>
            <div className={styles["status-badge"]}>
                <span className={styles["status-dot"]} />
                <span className={styles["mode-highlight"]}>SOMATIC BREATHWORK</span>
                <span className={styles["mode-subtext"]}>· Coherence Mode</span>
            </div>
            <p className={styles.subtitle}>
                Sync diaphragm with ambient frequency guide
            </p>
        </div>
    );
}

export default ModeBanner;