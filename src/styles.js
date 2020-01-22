const MostPopularServiceIconStyles = {
  fontSize: "25px",
  textAlign: "left",
  marginTop: "80px"
};

const SetAbsolutePosition = ({ top, right, left, bottom }) => ({
  top,
  right,
  left,
  bottom,
  position: "absolute"
});

let LegendText = {
  fontStyle: "italic",
  marginLeft: "5px",
  marginTop: "80px",
  fontWeight: "900"
};

let SearchContainer = {
  //marginBottom: "50px"
};

export {
  MostPopularServiceIconStyles,
  SetAbsolutePosition,
  LegendText,
  SearchContainer
};
