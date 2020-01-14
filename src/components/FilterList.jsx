import React from "react";

const DefaultItem = ({ serviceName, departmentName }) => (
  <div>
    <h3>{serviceName}</h3>
    <p>{departmentName}</p>
  </div>
);

const FilterList = ({
  as: As = React.Fragment,
  items = [],
  renderItem = props => <DefaultItem {...props} />,
  ...props
}) => <As {...props}>{items.map(renderItem)}</As>;

export default FilterList;
