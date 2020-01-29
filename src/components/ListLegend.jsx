import React from "react";
import { MostPopularServiceIconStyles } from "../styles";

const ListLegend = ({ icon, text }) => (
  <div className="dg_legend_container">
    <i
      className={icon}
      aria-hidden="true"
      style={MostPopularServiceIconStyles}
    ></i>
    <p className="dg_legend_text">{text}</p>
  </div>
);

export default ListLegend;
