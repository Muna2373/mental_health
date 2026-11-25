const TOKEN_KEY = "token";
const USER_KEY = "user";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const raw = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setAuthSession({ token, user, rememberMe = true }) {
  const target = rememberMe ? localStorage : sessionStorage;
  const other = rememberMe ? sessionStorage : localStorage;

  other.removeItem(TOKEN_KEY);
  other.removeItem(USER_KEY);

  if (token) {
    target.setItem(TOKEN_KEY, token);
  } else {
    target.removeItem(TOKEN_KEY);
  }

  if (user) {
    target.setItem(USER_KEY, JSON.stringify(user));
  } else {
    target.removeItem(USER_KEY);
  }
}

export function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
}
