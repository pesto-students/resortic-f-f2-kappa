import React from "react";
import classes from "./Recommendation.module.css";
function Recommendation({ background, name, onClick, cardStyle, textStyle }) {
  return (
    <div className={classes.Recommendation} style={cardStyle} onClick={onClick}>
      <div className={classes.wrapper}>
        <img src={background} alt="resort background" />
        <div className={classes.name} style={textStyle}>
          {name}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
