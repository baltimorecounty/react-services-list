import {
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

import React from "react";

let departmentStyle = {
  fontSize: ".9em",
  fontStyle: "italic",
  marginBottom: "0",
  marginTop: "100px"
};

let textDecoration = {
  textDecoration: "none"
};

let starImg = {
  fontSize: "30px",
  top: "0px",
  right: "0px",
  position: "absolute",
  color: "gray"
};

let container = {
  position: "relative",
  marginBottom: "0px"
};

let iconStyles = {
  fontSize: "70px"
};

const ServiceCard = ({ name, department, url, icon, rank }) => (
  <Card>
    <a href={url} style={textDecoration}>
      <CardContent>
        <div className="dg_icon-container" style={container}>
          <i className={icon} aria-hidden="true" style={iconStyles}></i>
          {rank > 0 ? (
            <span className="sr-only">
              {`${name} is one of baltimore county's most popular services`}
            </span>
          ) : null}
          <i
            className={rank > 0 ? "fas fa-star" : ""}
            style={starImg}
            aria-hidden="true"
          />
        </div>
        <h3>{name}</h3>
      </CardContent>
      <CardFooter>
        <p style={departmentStyle}>{department}</p>
      </CardFooter>
    </a>
  </Card>
);

export default ServiceCard;
