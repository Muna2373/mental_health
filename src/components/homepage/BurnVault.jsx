import styles from "./Home.module.css";

function BurnVault() {
    return (
        <div className={styles["burn-vault"]}>
            <div className={styles.title}>🔥 The Digital Burn Vault
                <div className={styles["burn-time"]}>
                     Ephemeral
                 </div>
            </div>
            <p>
                Release your burdens into smoke. Transcribe what weighs on you and set it to auto-destruct.
            </p>
            <div className={styles.lock}> 🔒 Your thoughts are private and will be automatically deleted after the selected time
            </div>

            <div className={styles.active_burn}>

                <div className={styles.burn_icon}>
                    🔥
                </div>

                <div className={styles.burn_divider}></div>

                <div className={styles.burn_details}>

                    <div className={styles.active_burn_header}>

                        <div className={styles.burn_titles}>
                            <h4>Active Incineration Cycle</h4>
                            <h3>Work Overload & Expectations</h3>
                        </div>

                    </div>

                    <p className={styles.burn_description}>
                        Carrying client friction and unreasonable
                        timelines through the weekend. Leaving...
                    </p>

                    <div className={styles.burn_progress_row}>
                        <div className={styles.burn_progress}>
                            <div className={styles.burn_progress_fill}></div>
                        </div>

                        <span>42%</span>
                    </div>

                </div>

            </div>

        </div>

    );
}
export default BurnVault;