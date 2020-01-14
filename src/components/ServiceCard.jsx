import React from "react";
import {
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

let starImg = {
  fontSize: ".2em",
  float: "right",
  marginTop: "0px",
  width: "10px"
};

const ServiceCard = ({ name, department, url, icon, rank }) => (
  <div className="d-flex col-lg-4 col-md-6 col-sm-6">
    <Card>
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
        <a href={url}> {department}</a>
      </CardFooter>
    </Card>
  </div>
);

export default ServiceCard;
