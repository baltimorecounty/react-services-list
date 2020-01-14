import React from "react";
import PropTypes from "prop-types";

const FilterList = ({
  as: As = React.Fragment,
  items = [],
  renderItem = props => <As {...props} />,
  ...props
}) => <As {...props}>{items.map(renderItem)}</As>;

FilterList.propTypes = {
  /** function that renders a component passed through*/
  renderItem: PropTypes.func.isRequired
};

export default FilterList;
