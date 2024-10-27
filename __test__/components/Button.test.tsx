import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Button from "@/components/Button/Button";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Button component", () => {
  const parsedId = 2;
  const pokemonsLength = 5;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should handle back to home", async () => {
    const handleBackToHome = jest.fn();

    render(
      <Button type="default" onClick={handleBackToHome}>
        BACK
      </Button>
    );

    await userEvent.click(screen.getByText("BACK"));
    expect(handleBackToHome).toHaveBeenCalled();
  });

  test("should handle next button", async () => {
    const handleNext = jest.fn();

    render(
    // @ts-ignore
      <Button type="primary" onClick={handleNext} disabled={parsedId === pokemonsLength}>
        NEXT
      </Button>
    );

    await userEvent.click(screen.getByText("NEXT"));
    expect(handleNext).toHaveBeenCalled();
  });

  test("should handle previous button", async () => {
    const handlePrevious = jest.fn();

    render(
      <Button type="primary" onClick={handlePrevious} disabled={parsedId <= 1}>
        PREVIOUS
      </Button>
    );

    await userEvent.click(screen.getByText("PREVIOUS"));
    expect(handlePrevious).toHaveBeenCalled();
  });
});
