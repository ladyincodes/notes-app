import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import NotesList from "./NotesList";
import { getNotes } from "../api/notes";

// Mock the api module
vi.mock("../api/notes.js");

describe("NotesList", () => {
  it("shows the list of notes", async () => {
    // Arrange: STUB getNotes. Axios puts the body in "data"
    getNotes.mockResolvedValue({
      data: [
        { id: 1, title: "Buy milk", content: "2 liters" },
        { id: 2, title: "Call mom", content: "Sunday evening" },
      ],
    });

    // Act: NotesList uses <Link>, so it needs a router around it
    render(
      <MemoryRouter>
        <NotesList />
      </MemoryRouter>,
    );

    // Assert: the data arrives later, so WAIT with findBy
    expect(await screen.findByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("2 liters")).toBeInTheDocument();
    expect(screen.getByText("Call mom")).toBeInTheDocument();
    expect(getNotes).toHaveBeenCalled();
  });
});
