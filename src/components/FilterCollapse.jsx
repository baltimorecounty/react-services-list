import React from "react";
import { Collapse } from "@baltimorecounty/dotgov-components";
import PopularityFilterCheckBox from "./PopularityFilterCheckBox";

const FilterCollapse = props => {
  const { id, header, onChange, isChecked, isExpanded } = props;
  return (
    <div className="dg_accordion">
      <Collapse id={id} header={header}>
        <PopularityFilterCheckBox
          onChange={onChange}
          checked={isChecked}
          isExpanded={isExpanded}
        />
      </Collapse>
    </div>
  );
};

export default FilterCollapse;
