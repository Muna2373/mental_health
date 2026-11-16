import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginHeader } from "/src/components/login/LoginHeader.jsx";
import { LoginForm } from "/src/components/login/LoginForm.jsx";
import "/src/components/login/LoginPage.css";

export default function LoginPage({onLoginSuccess}) {
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  {/*function handleLogin(event) {
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
    </main>*/}

  async function handleLogin(event) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    // Mock Login
    setTimeout(() => {
      if (
          email === "test@gmail.com" &&
          password === "123456"
      ) {
        // Mock Authentication
        localStorage.setItem("token", "mock-login-token");
        onLoginSuccess();
        navigate("/home", { replace: true });
      }
      else {
        setError("Invalid Email or Password");
      }
      setIsLoading(false);
    }, 800);
  }

  return (
      <main className="login-page">
        <section
            className="login-card"
            aria-labelledby="login-title"
        >
          <LoginHeader />

          <LoginForm
              rememberMe={rememberMe}
              onRememberChange={setRememberMe}
              onSubmit={handleLogin}
              isLoading={isLoading}
          />

          {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
          )}
        </section>
      </main>
  );
}
