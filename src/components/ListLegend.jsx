import React from "react";
import { MostPopularServiceIconStyles } from "../styles";

const ListLegend = props => {
  const { icon, text } = props;

  return (
    <div>
      <div className="dg_legend_container">
        <i
          className={icon}
          aria-hidden="true"
          style={MostPopularServiceIconStyles}
        ></i>
        <p className="dg_legend_text">{text}</p>
      </div>
    </div>
  );
};

export default ListLegend;
