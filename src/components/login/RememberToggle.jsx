export function RememberToggle({ checked, onChange }) {
  return (
    <label className="remember-row">
      <span>Remember sign in details</span>
      <input
        className="toggle-input"
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-label="Remember sign in details"
      />
      <span className="toggle-track" aria-hidden="true">
        <span className="toggle-thumb" />
      </span>
    </label>
  );
}
