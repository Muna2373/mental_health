import { describe, expect, it } from "vitest";
import {
  clearAuthSession,
  getToken,
  getUser,
  setAuthSession,
} from "./authStorage.js";

describe("authStorage", () => {
  it("stores session in localStorage when rememberMe is true", () => {
    setAuthSession({
      token: "tok-123",
      user: { name: "Alex" },
      rememberMe: true,
    });

    expect(localStorage.getItem("token")).toBe("tok-123");
    expect(sessionStorage.getItem("token")).toBeNull();
    expect(getToken()).toBe("tok-123");
    expect(getUser()).toEqual({ name: "Alex" });
  });

  it("stores session in sessionStorage and clears localStorage when rememberMe is false", () => {
    localStorage.setItem("token", "old-token");
    localStorage.setItem("user", JSON.stringify({ name: "Old" }));

    setAuthSession({
      token: "tok-session",
      user: { name: "Sam" },
      rememberMe: false,
    });

    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
    expect(sessionStorage.getItem("token")).toBe("tok-session");
    expect(getToken()).toBe("tok-session");
    expect(getUser()).toEqual({ name: "Sam" });
  });

  it("returns null if stored user JSON is malformed", () => {
    localStorage.setItem("user", "{bad-json");
    expect(getUser()).toBeNull();
  });

  it("clears both storages on clearAuthSession", () => {
    localStorage.setItem("token", "a");
    sessionStorage.setItem("user", JSON.stringify({ name: "B" }));

    clearAuthSession();

    expect(getToken()).toBeNull();
    expect(getUser()).toBeNull();
  });
});
