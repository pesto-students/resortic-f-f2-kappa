import React from "react";
import classes from "./Counter.module.css";
function Counter({ count = 0, onIncrease, onDecrease, min, max, style }) {
  return (
    <>
      <div className={classes.Counter} style={style}>
        <div
          className={classes.icon}
          onClick={() => {
            if (count === min) return;
            onDecrease();
          }}
        >
          -
        </div>
        <div className={classes.count}>{count}</div>
        <div
          className={classes.icon}
          onClick={() => {
            if (count === max) return;
            onIncrease();
          }}
        >
          +
        </div>
      </div>
    </>
  );
}

export default Counter;
