import {
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

import React from "react";

let starImg = {
  fontSize: ".2em",
  float: "right",
  marginTop: "0px",
  width: "10px"
};

const ServiceCard = ({ name, department, url, icon, rank }) => (
  <Card>
    <a href={url}>
      <CardContent>
        <div className="dg_icon-container">
          <i className={icon} aria-hidden="true"></i>
          <i
            className={rank ? "fas fa-star" : ""}
            style={starImg}
            aria-hidden="true"
          />
        </div>
        <h3>{name}</h3>
      </CardContent>
      <CardFooter>
        <p>{department}</p>
      </CardFooter>
    </a>
  </Card>
);

export default ServiceCard;
