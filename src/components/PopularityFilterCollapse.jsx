import React from "react";
import { Collapse, Checkbox } from "@baltimorecounty/dotgov-components";

const PopularityFilterCollapse = props => {
  const { id, header, onChange, isChecked, isExpanded } = props;

  return (
    <Collapse id={id} header={header}>
      <Checkbox
        id={`${id}Checkbox`}
        name={`${id}Checkbox`}
        onChange={onChange}
        checked={isChecked}
        isExpanded={isExpanded}
        label="Show popular services"
      />
    </Collapse>
  );
};

export default PopularityFilterCollapse;
