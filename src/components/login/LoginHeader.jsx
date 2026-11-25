import styles from "./LoginPage.module.css";

export function LoginHeader() {
  return (
    <header className={styles.loginHeader}>
      <div className={styles.brandMark} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h1 id="login-title">Welcome back to Your 3M</h1>
      <p>
        Please Login to continue.
      </p>
    </header>
  );
}
