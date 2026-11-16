import { FormField } from "./FormField.jsx";
import { RememberToggle } from "./RememberToggle.jsx";

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

      <a className="forgot-link" href="#forgot-password">
        Forgot your password?
      </a>

      <RememberToggle checked={rememberMe} onChange={onRememberChange} />

      <button className="login-button" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
      </button>

        {/*<div className="or-divider" role="separator" aria-label="Or">
        <span />
        <b>OR</b>
        <span />
      </div>*/}
    </form>
  );
}
