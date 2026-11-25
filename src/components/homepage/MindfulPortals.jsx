import styles from "./Home.module.css";

function MindfulPortals () {
    return (
        <div className={styles["mindful-portals"]}>
            <div className={styles.mindful_header}>
                 <h2>Daily Mindful Portals</h2>
                <span>Quick Sessions</span>
            </div>

            <div className={styles.portal_card}>
                <div className={styles.zen_icon}>
                    🧘
                </div>
                <div className={styles.game_card}>
                     <h3>Zen Pulse Mini-Game</h3>
                      <p>
                         Synchronized somatic breathwork
                         with tactile ripple taps.
                      </p>
                    <div className={styles.portal_divider}></div>
                         <div className={styles.portal_footer}>
                             <span>◷ 4 mins to calm</span>
                             <button>▶</button>
                          </div>
                     </div>
                 </div>
            <div className={styles.sound_portal}>
                <div className={styles.sound_icon}>
                    🎵
                </div>
                <div className={styles.sound_journey}>
                     <h3>Soundscape Journey</h3>
                     <p>
                         Rain on Cedarwood • 432Hz acoustic frequency.
                     </p>
                        <div className={styles.sound_divider}></div>
                        <div className={styles.sound_footer}>
                             <span>
                                 ● Frequency Live
                             </span>
                                 <button>🎧</button>
                        </div>
                </div>
            </div>

            <div>
                <div className={styles.vagus_portal}>
                    <div className={styles.vagus_icon}>
                        🌬️
                    </div>
                    <div className={styles.vagus_content}>
                        <h3> Vagus Nerve Reset</h3>
                        <p>
                            Inhale deeply for 4 seconds, exhale
                            softly with open mouth for 7 seconds.
                            Repeat 3 times.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default MindfulPortals;