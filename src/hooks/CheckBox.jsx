import React from "react";

const CheckBox = props => {
  const { onChange } = props;

  return (
    //<React.Fragment>
    <fieldset>
      <div className="item">

      <input
        name="popularity"
        type="checkbox"
        onChange={onChange}
      />
      <label for="a">POPULARITY</label>
      </div>
      </fieldset>

  );
};

export default CheckBox;
