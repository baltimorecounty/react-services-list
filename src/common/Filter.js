const FilterServices = (
  services = [],
  shouldShowMostPopularServices,
  searchText
) =>
  [...services]
    .filter(item => !shouldShowMostPopularServices || item.rank > 0)
    .filter(item => !searchText.trim || filterByTextInput(item, searchText));

const generateWordMatchRegex = word => "(?=.*" + word + ")";

const filterByTextInput = ({ name, department }, searchText) => {
  const searchWordsRegex = searchText
    .split(" ")
    .map(field => generateWordMatchRegex(field))
    .join("");
  const fieldsAsString = [name, department].join(" ").toLowerCase();
  const isTextMatch =
    fieldsAsString.indexOf(searchText.toLowerCase().trim()) > -1;
  const isSearchWordsMatch = fieldsAsString.match(
    new RegExp(searchWordsRegex + "+", "gi")
  );

  return isTextMatch || isSearchWordsMatch;
};

export { FilterServices };
