import {
  MostPopularServiceIconStyles,
  ServiceIconLinkDepartmentStyle,
  SetAbsolutePosition
} from "../styles";

import { IconLink } from "@baltimorecounty/dotgov-components";
import React from "react";

// Overrides default icon styles for a Icon Link
const iconResetStyles = {
  lineHeight: "unset",
  width: "auto",
  height: "auto"
};

const ServiceIconLink = ({ name, department, url, icon, rank }) => (
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
    style={{ display: "block", position: "relative", width: "100%" }}
  >
    <div>
      <p style={ServiceIconLinkDepartmentStyle}>{department}</p>
      {rank > 0 && (
        <i
          className="fas fa-star"
          style={{
            ...MostPopularServiceIconStyles,
            ...SetAbsolutePosition({ top: "15px", right: "15px" }),
            ...iconResetStyles
          }}
          aria-hidden="true"
        />
      )}
    </div>
  </IconLink>
);

export default ServiceIconLink;
