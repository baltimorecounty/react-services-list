import React from "react";
import { Checkbox } from "@baltimorecounty/dotgov-components";

const PopularityFilterCheckBox = props => {
  const { onChange, checked } = props;

  return (
    <Checkbox
      id="popularity"
      value={checked}
      onChange={onChange}
      label="Show Popular Services"
    />
  );
};

export default PopularityFilterCheckBox;
