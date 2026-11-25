import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App.jsx";

describe("App routing and auth guard", () => {
  it("redirects unauthenticated users to /login after splash screen", () => {
    vi.useFakeTimers();
    window.history.pushState({}, "", "/vault");

    render(<App />);
    expect(screen.getByText(/Take a deep breath/i)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1800);
    });

    expect(screen.getByText(/Welcome back to Your 3M/i)).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("renders protected /home route with user name when session exists", () => {
    vi.useFakeTimers();
    localStorage.setItem("token", "valid-token");
    localStorage.setItem("user", JSON.stringify({ name: "Nadia" }));
    window.history.pushState({}, "", "/home");

    render(<App />);

    act(() => {
      vi.advanceTimersByTime(1800);
    });

    expect(screen.getByText(/Good Morning,/i)).toBeInTheDocument();
    expect(screen.getByText(/Nadia/i)).toBeInTheDocument();
    vi.useRealTimers();
  });
});
