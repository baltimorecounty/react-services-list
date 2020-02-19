const FilterServices = (
  services = [],
  shouldShowMostPopularServices,
  searchText
) =>
  [...services]
    .filter(item => !shouldShowMostPopularServices || item.rank > 0)
    .filter(item => !searchText.trim || filterByTextInput(item, searchText));

const filterByTextInput = (item, searchText) => {
  return (
    item.name.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1 ||
    item.department.toLowerCase().indexOf(searchText.trim().toLowerCase()) !==
      -1
  );
};

export { FilterServices };
