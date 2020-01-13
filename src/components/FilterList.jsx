import React from "react";

const DefaultItem = ({ serviceName, departmentName }) => (
  <div>
    <h3>{serviceName}</h3>
    <p>{departmentName}</p>
  </div>
);

const FilterList = ({
  items = [],
  renderItem = props => <DefaultItem {...props} />
}) => console.log(items) || <ul>{items.map(renderItem)}</ul>;

export default FilterList;
