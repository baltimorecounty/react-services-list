import React from "react";
import { Collapse } from "@baltimorecounty/dotgov-components";
import CheckBox from "./CheckBox";

const SearchCollapse = props => {
  const { id, header, onHandleChange, isChecked, isExpanded } = props;
  console.log(props);
  return (
    <Collapse id={id} header={header}>
      <CheckBox
        onChange={onHandleChange}
        checked={isChecked}
        isExpanded={isExpanded}
      />
    </Collapse>
  );
};

export default SearchCollapse;
