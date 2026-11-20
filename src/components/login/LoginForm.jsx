import { FormField } from "./FormField.jsx";
import { RememberToggle } from "./RememberToggle.jsx";
import { Link } from "react-router-dom";

export function LoginForm({ rememberMe, onRememberChange, onSubmit, isLoading }) {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your Email"
        autoComplete="email"
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your Password"
        autoComplete="current-password"
      />

        <Link className="forgot-link" to="/forgot-password"><span>Forgot your password?</span></Link>
        <Link className="forgot-link" to="/register"><span>Sign up for an account</span></Link>

        <RememberToggle checked={rememberMe} onChange={onRememberChange} />

      <button className="login-button" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
