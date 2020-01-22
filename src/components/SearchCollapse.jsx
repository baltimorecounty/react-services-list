import React from "react";
import { Collapse } from "@baltimorecounty/dotgov-components";
import CheckBox from "./CheckBox";

const SearchCollapse = props => {
  const { id, header, onChange, isChecked, isExpanded } = props;
  return (
    <div className="dg_accordion">
      <Collapse id={id} header={header}>
        <CheckBox
          onChange={onChange}
          checked={isChecked}
          isExpanded={isExpanded}
        />
      </Collapse>
    </div>
  );
};

export default SearchCollapse;
