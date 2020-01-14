import {
  Card,
  CardContent,
  CardFooter
} from "@baltimorecounty/dotgov-components";

import React from "react";

let starImg = {
  fontSize: ".2em",
  top: "0px",
  right: "0px",
  position: "absolute",
  color: "gray"
};

let container = {
  position: "relative"
};

const ServiceCard = ({ name, department, url, icon, rank }) => (
  <Card>
    <a href={url}>
      <CardContent>
        <div style={container}>
          <div className="dg_icon-container">
            <i className={icon} aria-hidden="true"></i>
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
        </div>
      </CardContent>
      <CardFooter>
        <p>{department}</p>
      </CardFooter>
    </a>
  </Card>
);

export default ServiceCard;
