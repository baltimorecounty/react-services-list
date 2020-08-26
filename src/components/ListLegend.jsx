import { MostPopularServiceIconStyles } from "../styles";
import React from "react";

const ListLegend = ({ icon, text }) => (
  <div className="dg_legend_container">
    <i
      className={icon + " dg_popular_star"}
      aria-hidden="true"
      style={MostPopularServiceIconStyles}
    ></i>
    <p style={{ margin: 0 }}>{text}</p>
  </div>
);

export default ListLegend;
