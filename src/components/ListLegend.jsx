import React from "react";
import { MostPopularServiceIconStyles } from "../styles";

const ListLegend = props => {
  const { legendicon, legendtext } = props;

  return (
    <div>
      <div className="dg_legend_container">
        <i
          className={legendicon}
          aria-hidden="true"
          style={MostPopularServiceIconStyles}
        ></i>
        <p className="dg_legend_text">{legendtext}</p>
      </div>
    </div>
  );
};

export default ListLegend;
