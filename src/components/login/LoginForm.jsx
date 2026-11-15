import { FormField } from "./FormField.jsx";
import { RememberToggle } from "./RememberToggle.jsx";

export function LoginForm({ rememberMe, onRememberChange, onSubmit }) {
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <FormField
        label="Email"
        name="email"
        type="email"
        defaultValue="alex.jordan@gmail.com"
        autoComplete="email"
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        autoComplete="current-password"
      />

      <a className="forgot-link" href="#forgot-password">
        Forgot password?
      </a>

      <RememberToggle checked={rememberMe} onChange={onRememberChange} />

      <button className="login-button" type="submit">
        Log in
      </button>

      <div className="or-divider" role="separator" aria-label="Or">
        <span />
        <b>OR</b>
        <span />
      </div>
    </form>
  );
}
