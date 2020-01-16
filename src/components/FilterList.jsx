import PropTypes from "prop-types";
import React from "react";

const FilterList = ({
  as: As = React.Fragment,
  items = [],
  renderItem = props => <As {...props} />,
  ...props
}) => <As {...props}>{items.map(renderItem)}</As>;

FilterList.propTypes = {
  /** render the components container as this type of thing, can be another component or a string if it's a basic html element */
  as: PropTypes.any,
  /** list of data items to display */
  items: PropTypes.array,
  /** function that renders a component passed through*/
  renderItem: PropTypes.func.isRequired
};

export default FilterList;
