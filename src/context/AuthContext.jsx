import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./authContext.js";
import { apiRequest, setUnauthorizedHandler } from "../services/apiClient.js";
import {
  clearAuthSession,
  getToken,
  getUser,
  setAuthSession,
} from "../services/authStorage.js";

function normalizeAuthPayload(data) {
  const payload = data?.data && typeof data.data === "object" ? data.data : data;
  const token = payload?.token || payload?.accessToken || null;
  const user = payload?.user || null;
  return { token, user };
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getToken());
  const [user, setUser] = useState(() => getUser());

  const logout = useCallback(() => {
    clearAuthSession();
    setToken(null);
    setUser(null);
  }, []);

  useEffect(() => {
    setUnauthorizedHandler(logout);
    return () => setUnauthorizedHandler(null);
  }, [logout]);

  const login = useCallback(async ({ email, password, rememberMe = true }) => {
    const data = await apiRequest("/api/auth/log", {
      method: "POST",
      body: { email, password, rememberMe },
    });

    const normalized = normalizeAuthPayload(data);
    setAuthSession({
      token: normalized.token,
      user: normalized.user,
      rememberMe,
    });
    setToken(normalized.token);
    setUser(normalized.user);
    return normalized;
  }, []);

  const register = useCallback(async ({ name, email, password, tel, gender, dob }) => {
    const data = await apiRequest("/api/auth/register", {
      method: "POST",
      body: { name, email, password, tel, gender, dob },
    });

    const normalized = normalizeAuthPayload(data);
    setAuthSession({
      token: normalized.token,
      user: normalized.user,
      rememberMe: true,
    });
    setToken(normalized.token);
    setUser(normalized.user);
    return normalized;
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout,
    }),
    [user, token, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
