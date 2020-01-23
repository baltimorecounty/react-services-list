import React from "react";
import { Collapse, Checkbox } from "@baltimorecounty/dotgov-components";

const PopularityFilterCollapse = props => {
  const { id, header, onChange, isChecked, value } = props;

  return (
    <Collapse id={id} header={header}>
      <Checkbox
        id={`${id}Checkbox`}
        name={`${id}Checkbox`}
        onChange={onChange}
        checked={isChecked}
        label="Show popular services"
        value={value}
      />
    </Collapse>
  );
};

export default PopularityFilterCollapse;
