import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Vault from "./Vault.jsx";

function renderVault() {
  return render(
    <MemoryRouter>
      <Vault />
    </MemoryRouter>
  );
}

describe("Vault page", () => {
  it("updates somatic tag and decay days and seals a thought", async () => {
    const user = userEvent.setup();
    renderVault();

    await user.click(screen.getByRole("button", { name: /Exhaustion/i }));
    await user.click(screen.getByText(/AUTO-BURN IN 7 DAYS/i));

    const textarea = screen.getByPlaceholderText(/What feels too heavy/i);
    await user.type(textarea, "Too many meetings today");

    await user.click(screen.getByRole("button", { name: /Seal & Schedule Burn/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Sealed under Exhaustion for auto-burn in 7 days."
    );
    expect(textarea).toHaveValue("");
  });

  it("shows validation message when sealing empty text and incinerates non-empty text", async () => {
    const user = userEvent.setup();
    renderVault();

    await user.click(screen.getByRole("button", { name: /Seal & Schedule Burn/i }));
    expect(screen.getByRole("status")).toHaveTextContent(
      "Please write a thought before sealing."
    );

    const textarea = screen.getByPlaceholderText(/What feels too heavy/i);
    await user.type(textarea, "Letting go");
    await user.click(screen.getByRole("button", { name: /Instant Incineration/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Thought incinerated. No trace retained."
    );
    expect(textarea).toHaveValue("");
  });
});
