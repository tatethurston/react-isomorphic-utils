import React, { FC } from "react";
import { ClientOnly } from ".";
import { useClientOnly } from "../useClientOnly";
import { render, screen } from "@testing-library/react";

jest.mock("../useClientOnly", () => ({ useClientOnly: jest.fn() }));
const mockUseClientOnly = useClientOnly as jest.Mock;

describe(ClientOnly, () => {
  const Example1: FC = () => {
    return (
      <ClientOnly>
        <div>Client Only!</div>
      </ClientOnly>
    );
  };

  it("renders on the client", () => {
    mockUseClientOnly.mockImplementationOnce(() => true);
    render(<Example1 />);

    expect(screen.queryByText("Client Only!")).not.toBeNull();
  });

  it("does not render on the server", () => {
    mockUseClientOnly.mockImplementationOnce(() => false);
    render(<Example1 />);

    expect(screen.queryByText("Client Only!")).toBeNull();
  });

  const Example2: FC = () => {
    return (
      <ClientOnly placeholder={<div>Loading...</div>}>
        <div>Client Only!</div>
      </ClientOnly>
    );
  };

  it("renders the placeholder when provided on the server", () => {
    mockUseClientOnly.mockImplementationOnce(() => false);
    render(<Example2 />);

    expect(screen.queryByText("Loading...")).not.toBeNull();
  });
});
