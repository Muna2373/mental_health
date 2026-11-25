import styles from "./LoginPage.module.css";

export function FormField({
  label,
  name,
  type = "text",
  defaultValue,
  placeholder,
  autoComplete,
  required = true
}) {
  return (
    <div className={styles.formField}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}
