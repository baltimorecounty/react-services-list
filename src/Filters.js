const Filters = [
  {
    targetApiField: "isPopularService",
    displayName: "Filter",
    options: [{ label: "Show popular services", value: "true" }],
  },
  {
    targetApiField: "tags",
    displayName: "I Want To",
    options: [
      { label: "Apply", value: "apply" },
      { label: "Contact", value: "contact" },
      { label: "Follow Up", value: "follow-up" },
      { label: "Pay", value: "pay" },
      { label: "Report", value: "report" },
    ],
  },
];

export default Filters;
