import { FiLock, FiRotateCcw } from 'react-icons/fi';
import { FaFireFlameCurved } from "react-icons/fa6";
import styles from './Vault.module.css';

export default function SanctuaryCanvas({ text, setText }) {
    return (
        <div className={styles.canvasCard}>
            <div className={styles.canvasHeader}>
                <div className={styles.canvasTitleGroup}>
                    <span><FaFireFlameCurved /></span>
                    <span className={styles.canvasTitleText}>UNFILTERED SANCTUARY CANVAS</span>
                </div>
                <span className={styles.canvasCharCount}>{text.length} chars / Dissolvable</span>
            </div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What feels too heavy to carry right now? Spill it raw. It will not stay."
                rows={5}
                className={styles.sanctuaryTextarea}
            />

            <div className={styles.canvasFooter}>
                <div className={styles.encryptionInfo}>
                    <FiLock />
                    <span>Client-side ephemeral encryption</span>
                </div>

                <button onClick={() => setText('')} className={styles.resetBtn}>
                    <FiRotateCcw /> Reset
                </button>
            </div>
        </div>
    );
}