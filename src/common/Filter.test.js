import { FilterServices } from "./Filter";

const mockServices = [
  {
    name: "Adopt a Pet",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-heart",
    rank: 5,
    department: "Information Technology"
  },
  {
    name: "Apply for a Job",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-skiing",
    rank: 2,
    department: "Information Technology"
  },
  {
    name: "Citations",
    url:
      "https://beta.baltimorecountymd.gov/departments/budfin/citations/index.html",
    icon: "fas fa-receipt",
    rank: 3,
    department: "Law Office"
  },
  {
    name: "County Code",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-fighter-jet",
    rank: 4,
    department: "Information Technology"
  },
  {
    name: "Find Your Zoning",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-heart",
    rank: 5,
    department: "Information Technology"
  },
  {
    name: "Jury Duty",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-heart",
    rank: 6,
    department: "Law Office"
  },
  {
    name: "Police News",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-starship-freighter",
    rank: 7,
    department: "Information Technology"
  },
  {
    name: "Quality Assurance",
    url: "https://beta.baltimorecountymd.gov/services.html",
    icon: "fas fa-drafting-compass",
    rank: 0,
    department: "Information Technology"
  },
  {
    name: "Rec and Parks",
    url: "http://staging.baltimorecountymd.gov/recreation/index.html",
    icon: "fas fa-tree",
    rank: 8,
    department: "Information Technology"
  },
  {
    name: "Trash and Recycling",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-trash",
    rank: 9,
    department: "Information Technology"
  },
  {
    name: "View Daily Docket",
    url: "https://beta.baltimorecountymd.gov/prototyping/adoption.html",
    icon: "fas fa-heart",
    rank: 10,
    department: "Information Technology"
  }
];

test("should retrieve full card contents", () => {
  const actual = FilterServices(mockServices, null, "j");
  expect(actual.length).toEqual(2);
});

test("should retrieve full card contents", () => {
  const actual = FilterServices(mockServices, null, "citations law office");
  expect(actual.length).toEqual(1);
});

test("should retrieve full card contents with out of order text", () => {
  const actual = FilterServices(mockServices, null, "law jury");
  expect(actual.length).toEqual(1);
});
