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
          <input name="popularity" type="checkbox" onChange={onChange} />
          <h4>POPULARITY </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckBox;
