import {
  MostPopularServiceIconStyles,
  PositionAbsoluteTopRightStyle,
  ServiceIconLinkDepartmentStyle
} from "../styles";

import { IconLink } from "@baltimorecounty/dotgov-components";
import React from "react";

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
    style={{ position: "relative" }}
  >
    <div>
      <p style={ServiceIconLinkDepartmentStyle}>{department}</p>
      <i
        className={rank > 0 && icon ? "fas fa-star" : ""}
        style={{
          ...MostPopularServiceIconStyles,
          ...PositionAbsoluteTopRightStyle
        }}
        aria-hidden="true"
      />
    </div>
  </IconLink>
);

export default ServiceIconLink;
