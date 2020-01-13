import "@testing-library/jest-dom/extend-expect";

import { render, wait, within } from "@testing-library/react";
import { ServiceList } from "../components/ServiceList";

import FilterList from "./FilterList";
import React from "react";

// TODO: This import will be used once we have more functionality
// import userEvent from "@testing-library/user-event";

jest.mock("../services/Api");

test("should render a list of services", async () => {
  ServiceList.mockResolvedValueOnce([
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

  const { getByText } = render(<FilterList />);

  // Ensure there is a loading message
  getByText("Loading Baltimore County services...");

  // Wait until the service are loaded via ajax
  await wait(() => {
    // Legend for popular services
    getByText(/indicates a top 20 popular service/i);

    // Service Links
    const withinAdoptAPetLink = within(getByText(/adopt a pet/i).closest("a"));
    withinAdoptAPetLink.getByText(/animal services/i);
    withinAdoptAPetLink.getByText(
      /adopt a pet is one of baltimore county's most popular services/i
    );

    const withinPavilionLink = within(
      getByText(/pavilion rental/i).closest("a")
    );
    withinPavilionLink.getByText(/rec and parks/i);

    const withinTrashAndRecyclingLink = within(
      getByText(/trash and recycling/i).closest("a")
    );
    withinTrashAndRecyclingLink.getByText(/public works/i);
    withinTrashAndRecyclingLink.getByText(
      /trash and recycling is one of baltimore county's most popular services/i
    );
  });
});
