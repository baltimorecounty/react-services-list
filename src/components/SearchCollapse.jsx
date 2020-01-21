import React from "react";
import { Collapse } from "@baltimorecounty/dotgov-components";
import CheckBox from "./CheckBox";

const SearchCollapse = props => {
  const { id, header, onChange, isChecked } = props;

  return (
    <Collapse id={id} header={header}>
      <CheckBox onChange={onChange} checked={isChecked} />
    </Collapse>
  );
};

export default SearchCollapse;
