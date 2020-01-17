import React from "react";
import { MostPopularServiceIconStyles } from "../styles";
const CheckBox = props => {
  const { onChange , checked} = props;
  let legendText = {
    fontStyle: "italic",
    marginLeft: "5px",
    fontWeight: "900"
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="flexItem">
          <i className="fas fa-star" aria-hidden="true"    style={MostPopularServiceIconStyles}></i> 
          <p style={legendText}> - Indicates a Most Popular Service</p>
         </div>
        <div className="flexItem"> 
          <p style={legendText}>Sort by: </p>
          <div className="dg_checkbox">
            <input
              name="popularity"
              id="popularity-color-black"
              value={checked}
              className="dg_checkbox-input"
              type="checkbox"
              onChange={onChange}
              
            />
            <label class="dg_label dg_checkbox-label" for="popularity-color-black">
              POPULARITY
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
