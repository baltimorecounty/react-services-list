import React from "react";
import { MostPopularServiceIconStyles } from "../styles";

const ListLegend = ({ icon, text }) => (
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

export default ListLegend;
