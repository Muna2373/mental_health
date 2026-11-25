import styles from "./LoginPage.module.css";

export function RememberToggle({ checked, onChange }) {
  return (
    <label className={styles.rememberRow}>
      <span>Remember sign in details</span>
      <input
        className={styles.toggleInput}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-label="Remember sign in details"
      />
      <span className={styles.toggleTrack} aria-hidden="true">
        <span className={styles.toggleThumb} />
      </span>
    </label>
  );
}
