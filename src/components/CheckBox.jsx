import React from "react";

const CheckBox = props => {
  const { onChange } = props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="flexItem">
          <i className="fas fa-star legendStar" aria-hidden="true"></i>
          <p className="ltalicText">-Indicates a top 20 popular service</p>
        </div>
        <div className="flexItem">
          <p className="ltalicText">Sort by: </p>
          <div className="dg_checkbox">
            <input
              name="popularity"
              id="popularity-color-blue"
              className="dg_checkbox-input"
              type="checkbox"
              onChange={onChange}
            />
            <label class="dg_label dg_checkbox-label" for="popularity-color-blue">
              POPULARITY
            </label>
            {/* <h4>POPULARITY </h4> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
