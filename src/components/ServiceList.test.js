import "@testing-library/jest-dom/extend-expect";

import { render, wait, within } from "@testing-library/react";

import React from "react";
import ServiceList from "./ServiceList";
import { GetServices as mockGetService } from "../services/ApiService";

// TODO: This import will be used once we have more functionality
// import userEvent from "@testing-library/user-event";

jest.mock("../services/ApiService");

beforeAll(() => {
  jest.restoreAllMocks();
});

test("should show an error when the service is not available", async () => {
  mockGetService.mockRejectedValueOnce();
  const { getByText } = render(<ServiceList />);

  // Ensure there is a loading message
  getByText("Loading Baltimore County services...");

  await wait(() => {
    expect(/error/i);
  });
});

test("should render a list of services", async () => {
  mockGetService.mockResolvedValueOnce([
    {
      name: "Adopt a Pet",
      url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
      icon: "fa-heart",
      rank: 1,
      department: "Animal Services"
    },
    {
      name: "Pavilion Rental",
      url: "http://staging.baltimorecountymd.gov/recreation/index.html",
      icon: "fas-guitar",
      rank: null,
      department: "Rec and Parks"
    },
    {
      name: "Trash and Recycling",
      url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
      icon: "fas-trash",
      rank: 8,
      department: "Public Works"
    }
  ]);

  const { getByText, queryAllByText } = render(<ServiceList />);

  // Ensure there is a loading message
  getByText("Loading Baltimore County services...");

  // Wait until the service are loaded via ajax
  await wait(() => {
    // Legend for popular services
    getByText(/indicates a most popular service/i);

    // Service Links
    const adoptAPetLinkElm = queryAllByText(/adopt a pet/i)[0].closest("a");
    const withinAdoptAPetLink = within(adoptAPetLinkElm);
    withinAdoptAPetLink.getByText(/animal services/i);
    expect(adoptAPetLinkElm.getAttribute("aria-label")).toMatch(
      /adopt a pet is one of baltimore county's most popular services/i
    );

    const pavilionLinkElm = queryAllByText(/pavilion rental/i)[0].closest("a");
    const withinPavilionLink = within(pavilionLinkElm);
    withinPavilionLink.getByText(/rec and parks/i);
    expect(pavilionLinkElm.getAttribute("aria-label")).toMatch(
      /pavilion rental is one of baltimore county's services/i
    );

    const trashAndRecyclingLinkElm = queryAllByText(
      /trash and recycling/i
    )[0].closest("a");
    const withinTrashAndRecyclingLink = within(trashAndRecyclingLinkElm);
    withinTrashAndRecyclingLink.getByText(/public works/i);
    expect(trashAndRecyclingLinkElm.getAttribute("aria-label")).toMatch(
      /trash and recycling is one of baltimore county's most popular services/i
    );
  });
});
