import React from "react";

const FilterList = ({
  as: As = React.Fragment,
  items = [],
  renderItem = props => <As {...props} />,
  ...props
}) => <As {...props}>{items.map(renderItem)}</As>;

export default FilterList;
