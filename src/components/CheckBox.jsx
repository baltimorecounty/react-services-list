import React from "react";

const CheckBox = props => {
  const { onChange, checked } = props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="flexItem">
          <div className="dg_checkbox">
            <input
              name="popularity"
              id="popularity-color-black"
              value={checked}
              className="dg_checkbox-input"
              type="checkbox"
              onChange={onChange}
            />
            <label
              className="dg_label dg_checkbox-label"
              htmlFor="popularity-color-black"
            >
              POPULARITY
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
