import { Clock, RefreshCw } from "lucide-react";
import styles from "./CalmPulse.module.css";

function Breathwidget() {
    return (
        <div className={styles["breathing-container"]}>
            <div className={styles["circle-wrapper"]}>
                <svg className={styles["progress-ring"]} viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className={styles["ring-background"]}
                        strokeWidth="3"
                        fill="transparent"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className={styles["ring-progress"]}
                        strokeWidth="3"
                        strokeDasharray="264"
                        strokeDashoffset="60"
                        strokeLinecap="round"
                        fill="transparent"
                    />
                </svg>

                <div className={styles["circle-content"]}>
                    <span className={styles["state-label"]}>Hold</span>
                    <span className={styles["time-display"]}>2s</span>
                    <div className={styles["remaining-time"]}>
                        <Clock size={12} />
                        <span>04:10 remaining</span>
                    </div>
                </div>
            </div>

            <div className={styles["haptic-info"]}>
                <RefreshCw size={14} className={styles["spin-icon"]} />
                <span>Haptic pacing synced to vagus pulse</span>
            </div>
        </div>
    );
}

export default Breathwidget;