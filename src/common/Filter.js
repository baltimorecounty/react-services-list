/**
 * Filters a list of services for the given filters
 * @param {array} services list of services to filter
 * @param {boolean} shouldShowMostPopularServices determines of whether you should show only popular services, null is possible
 * @param {boolean} searchText search text
 */
const FilterServices = (
  services = [],
  shouldShowMostPopularServices,
  searchText
) =>
  [...services]
    .filter(item => !shouldShowMostPopularServices || item.rank > 0)
    .filter(item => !searchText.trim || filterByTextInput(item, searchText));

const generateWordMatchRegexPattern = word => "(?=.*" + word + ")";

const filterByTextInput = ({ name, department }, searchText) => {
  const searchWordsRegex = searchText
    .split(" ")
    .map(field => generateWordMatchRegexPattern(field))
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
