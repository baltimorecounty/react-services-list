import { IconLink } from "@baltimorecounty/dotgov-components";

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
  <IconLink
    icon={icon}
    size="large"
    description={
      rank > 0
        ? `${name} is one of baltimore county's most popular services`
        : `${name} is one of baltimore county's services`
    }
    text={name}
    href={url}
    children={
      <div>
        <p style={departmentStyle}>{department}</p>
        <i
          className={rank > 0 ? "fas fa-star" : ""}
          style={starImg}
          aria-hidden="true"
        />
      </div>
    }
  />
);

export default ServiceCard;
