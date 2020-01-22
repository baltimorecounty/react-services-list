import React from "react";
import { TextInput } from "@baltimorecounty/dotgov-components";

const Search = props => {
  const { onChange } = props;
  return (
    <TextInput
      id="full-name"
      label="Search for services"
      placeholder="Search for services and more..."
      onChange={onChange}
    />
  );
};

export default Search;
