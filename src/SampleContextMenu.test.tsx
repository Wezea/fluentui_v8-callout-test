import { expect, it } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { SampleDetailsList } from "./SampleDetailsList";

it("Details list - should render the context menu - First Row Link Ref", async () => {
  render(<SampleDetailsList />);
  const grid = await screen.findByRole("grid");
  expect(screen.queryByRole("menu")).toBeNull();
  const rows = within(grid).getAllByRole("row");
  expect(rows).toHaveLength(2);
  fireEvent.contextMenu(rows[0]);
  const menu = await screen.findByRole("menu");
  expect(within(menu).getAllByRole("menuitem")).toHaveLength(2);
});

it("Details list - should render the context menu - Second Row Point", async () => {
  render(<SampleDetailsList />);
  const grid = await screen.findByRole("grid");
  expect(screen.queryByRole("menu")).toBeNull();
  const rows = within(grid).getAllByRole("row");
  expect(rows).toHaveLength(2);
  fireEvent.contextMenu(rows[1]);
  const menu = await screen.findByRole("menu");
  expect(within(menu).getAllByRole("menuitem")).toHaveLength(2);
});
