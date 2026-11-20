import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginHeader } from "/src/components/login/LoginHeader.jsx";
import { LoginForm } from "/src/components/login/LoginForm.jsx";
import "/src/components/login/LoginPage.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function LoginPage({onLoginSuccess}) {
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/log`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password, rememberMe})
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }
      const storage = rememberMe ? localStorage : sessionStorage;
      const otherStorage = rememberMe ? sessionStorage : localStorage;

      otherStorage.removeItem("token");
      otherStorage.removeItem("user");

      if (data.token) {
        storage.setItem("token", data.token);
      }
      if (data.user) {
        storage.setItm("user", JSON.stringify(data.user));
      }

      onLoginSuccess?.(data.user);
      navigate("/home", {replace: true});
    } catch {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
      <main className="login-page">
        <section className="login-card" aria-labelledby="login-title">
          <LoginHeader/>
          <LoginForm
              rememberMe={rememberMe}
              onRememberChange={setRememberMe}
              onSubmit={handleLogin}
              isLoading={isLoading}
          />

          {error && (
              <p className="login-error" role="alert">{error}</p>
          )}
        </section>
      </main>
  );
}