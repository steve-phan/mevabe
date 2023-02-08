import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SidebarRoutes } from "./SidebarRoutes";

jest.mock("hooks/useAppRoute", () => ({
  useAppRoute: jest.fn(() => ({
    appRoutes: [
      {
        category: "Category 1",
        posts: [
          {
            title: "Post 1",
            slug: "post-1",
          },
          {
            title: "Post 2",
            slug: "post-2",
          },
        ],
      },
      {
        category: "Category 2",
        posts: [
          {
            title: "Post 3",
            slug: "post-3",
          },
          {
            title: "Post 4",
            slug: "post-4",
          },
        ],
      },
    ],
  })),
}));

describe("handleCategoryOpen", () => {
  it("opens a category if it is not already open", async () => {
    const { queryByText, getByTestId } = render(<SidebarRoutes />);

    fireEvent.click(getByTestId("collapse-menu-0"));

    await waitFor(() => expect(queryByText(/Post 1/i)).toBeInTheDocument());
    await waitFor(() => expect(queryByText(/Post 2/i)).toBeInTheDocument());
  });

  it("closes a category if it is already open", () => {
    const { queryByText, getByTestId } = render(<SidebarRoutes />);

    fireEvent.click(getByTestId("collapse-menu-0"));
    fireEvent.click(getByTestId("collapse-menu-0"));

    expect(queryByText(/Post 1/i)).not.toBeInTheDocument();
    expect(queryByText(/Post 2/i)).not.toBeInTheDocument();
  });
});
