import React from "react";
const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLedyStyle = { color, fontSize: "20px" };
  return <p style={contentLedyStyle}>{children}</p>;
};

export default ColorfulMessage;
