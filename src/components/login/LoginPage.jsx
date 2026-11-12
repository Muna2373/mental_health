import { useState } from "react";
import { LoginHeader } from "./LoginHeader.jsx";
import { LoginForm } from "./LoginForm.jsx";
import "./LoginPage.css";

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(true);

  function handleLogin(event) {
    event.preventDefault();
    // Connect this handler to your authentication API.
    console.log("Login submitted", {
      email: event.currentTarget.email.value,
      rememberMe
    });
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <LoginHeader />
        <LoginForm
          rememberMe={rememberMe}
          onRememberChange={setRememberMe}
          onSubmit={handleLogin}
        />
      </section>
    </main>
  );
}
