import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginHeader } from "/src/components/login/LoginHeader.jsx";
import { LoginForm } from "/src/components/login/LoginForm.jsx";
import { useAuth } from "../../context/authContext.js";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;

    try {
      await login({ email, password, rememberMe });
      navigate("/home", { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
      <main className={styles.loginPage}>
        <section className={styles.loginCard} aria-labelledby="login-title">
          <LoginHeader/>
          <LoginForm
              rememberMe={rememberMe}
              onRememberChange={setRememberMe}
              onSubmit={handleLogin}
              isLoading={isLoading}
          />

          {error && (
              <p className={styles.loginError} role="alert">{error}</p>
          )}
        </section>
      </main>
  );
}