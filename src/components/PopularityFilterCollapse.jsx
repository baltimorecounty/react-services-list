import React from "react";
import { Collapse, Checkbox } from "@baltimorecounty/dotgov-components";

const PopularityFilterCollapse = props => {
  const { id, header, onChange, checked } = props;

  return (
    <Collapse id={id} header={header}>
      <Checkbox
        id={`${id}Checkbox`}
        name={`${id}Checkbox`}
        onChange={onChange}
        checked={checked}
        label="Show popular services"
        value={`${checked}`}
      />
    </Collapse>
  );
};

export default PopularityFilterCollapse;
