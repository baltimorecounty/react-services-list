const MostPopularServiceIconStyles = {
  fontSize: "25px",
  color: "gray",
  textAlign: "left"
};

const SetAbsolutePosition = ({ top, right, left, bottom }) => ({
  top,
  right,
  left,
  bottom,
  position: "absolute"
});

let ServiceIconLinkDepartmentStyle = {
  fontSize: ".9em",
  fontStyle: "italic",
  marginBottom: "0",
  marginTop: "100px"
};

export {
  MostPopularServiceIconStyles,
  SetAbsolutePosition,
  ServiceIconLinkDepartmentStyle
};
