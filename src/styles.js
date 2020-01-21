const MostPopularServiceIconStyles = {
  fontSize: "25px",
  textAlign: "left"
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
  fontWeight: "900"
};

 let CollapseContainer = {
   width: "100%",
   marginRight: "50px",
   position:"relative"
 };

export {
  MostPopularServiceIconStyles,
  SetAbsolutePosition,
  LegendText,
  CollapseContainer
};
