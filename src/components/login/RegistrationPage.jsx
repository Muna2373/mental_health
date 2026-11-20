import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "./FormField.jsx"
import "./LoginPage.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function RegistrationPage({ onAuthSuccess }) {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();
        setError("");

        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value;
        const confirmPassword = form.elements.confirmPassword.value;
        const tel = form.elements.tel?.value.trim() || "";
        const gender = form.elements.gender?.value || "";
        const dob = form.elements.dob?.value || "";

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, tel, gender, dob })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || "Registration failed.");
                return;
            }

            if (data.token) {
                localStorage.setItem("token", data.token);
            }
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
            }

            onAuthSuccess?.(data);
            navigate("/home", { replace: true });
        } catch {
            setError("Unable to connect to the server. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="login-page">
            <section className="login-card" aria-labelledby="register-title">
                <header className="login-header">
                    <div className="brand-mark" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                    <h1 id="register-title">Create Your 3M Account</h1>
                    <p>Sign up to get started.</p>
                </header>

                <form className="login-form" onSubmit={handleRegister}>
                    <FormField
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="Enter your Name"
                        autoComplete="name"
                    />

                    <FormField
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        placeholder="Enter your Date of Birth"
                        autoComplete="bday"
                    />

                    <FormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        autoComplete="email"
                    />

                    <FormField
                        label="Phone Number (Optional)"
                        name="tel"
                        type="tel"
                        placeholder="Enter your Phone Number"
                        autoComplete="tel"
                        required={false}
                    />

                    <div className="form-field-select">
                        <label htmlFor="gender">Gender (Optional)</label>
                        <select id="gender" name="gender" defaultValue="">
                            <option value="">Select gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="non-binary">Non-binary</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                    </div>

                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Create a Password (min 6 chars)"
                        autoComplete="new-password"
                    />

                    <FormField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your Password"
                        autoComplete="new-password"
                    />

                    <Link className="forgot-link" to="/login">
                        Already have an account? Log in.
                    </Link>

                    <button className="login-button" type="submit" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>

                {error && (
                    <p className="login-error" role="alert">
                        {error}
                    </p>
                )}
            </section>
        </main>
    );
}