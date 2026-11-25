import { TrendingUp, TrendingDown } from "lucide-react";
import styles from "./CalmPulse.module.css";

function MatricsDashboard() {
    return (
        <div className={styles["metrics-grid"]}>
            <div className={styles["metric-card"]}>
                <div className={styles["metric-header"]}>
                    <span>HRV BALANCE</span>
                    <span className={styles["trend-up"]}>
                        <TrendingUp size={12} /> +8%
                    </span>
                </div>
                <div className={styles["metric-value-row"]}>
                    <span className={styles["metric-number"]}>92</span>
                    <span className={styles["metric-unit"]}>ms</span>
                </div>
                <div className={styles["metric-footer"]}>
                    <span className={styles["dot-emerald"]} />
                    <span>Autonomic Coherence</span>
                </div>
            </div>

            <div className={styles["metric-card"]}>
                <div className={styles["metric-header"]}>
                    <span>SOMATIC LOAD</span>
                    <span className={styles["trend-down"]}>
                        <TrendingDown size={12} /> 24%
                    </span>
                </div>
                <div className={styles["metric-value-row"]}>
                    <span className={`${styles["metric-number"]} ${styles.cyan}`}>Low</span>
                    <span className={styles["metric-unit"]}>Tier I</span>
                </div>
                <div className={styles["metric-footer"]}>
                    <span className={styles["dot-cyan"]} />
                    <span>Cortisol down-shift</span>
                </div>
            </div>
        </div>
    );
}

export default MatricsDashboard;