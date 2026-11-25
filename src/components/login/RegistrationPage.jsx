import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "./FormField.jsx";
import { useAuth } from "../../context/authContext.js";
import styles from "./LoginPage.module.css";

export default function RegistrationPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { register } = useAuth();

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
            await register({ name, email, password, tel, gender, dob });
            navigate("/home", { replace: true });
        } catch (err) {
            setError(err?.message || "Registration failed.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className={styles.loginPage}>
            <section className={styles.loginCard} aria-labelledby="register-title">
                <header className={styles.loginHeader}>
                    <div className={styles.brandMark} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                    <h1 id="register-title">Create Your 3M Account</h1>
                    <p>Sign up to get started.</p>
                </header>

                <form className={styles.loginForm} onSubmit={handleRegister}>
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

                    <div className={styles.formFieldSelect}>
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

                    <Link className={styles.forgotLink} to="/login">
                        Already have an account? Log in.
                    </Link>

                    <button className={styles.loginButton} type="submit" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Sign Up"}
                    </button>
                </form>

                {error && (
                    <p className={styles.loginError} role="alert">
                        {error}
                    </p>
                )}
            </section>
        </main>
    );
}