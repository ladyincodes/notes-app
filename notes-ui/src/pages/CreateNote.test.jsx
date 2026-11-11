import { describe, expect, it, vi } from "vitest";
import { createNote } from "../api/notes";
import CreateNote from "./CreateNote";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

// replaces real API file with faces
vi.mock("../api/notes.js");

describe("CreateNote", () => {
  it("creates a note and goes bacck to the list", async () => {
    // Arrange
    createNote.mockResolvedValue({ data: { id: 3 } });
    const user = userEvent.setup();

    // Start on /create. "/" shows simple text so we can see the navigation
    render(
      <MemoryRouter initialEntries={["/create"]}>
        <Routes>
          <Route path="/create" element={<CreateNote />} />
          <Route path="/" element={<p>Notes list page</p>} />
        </Routes>
      </MemoryRouter>,
    );

    // Act: fill the form and click Save, like a real user
    await user.type(screen.getByLabelText("Title"), "Buy milk");
    await user.type(screen.getByLabelText("Content"), "2 liters");
    await user.click(screen.getByRole("button", { name: "Save" }));

    // Asseert: MOCK check, the API was called with the form values

    await waitFor(() =>
      expect(createNote).toHaveBeenCalledWith({
        title: "Buy milk",
        content: "2 liters",
      }),
    );

    // and the app navigated back to "/"
    expect(await screen.findByText("Notes list page")).toBeInTheDocument();
  });
});
