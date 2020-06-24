import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
  const btnClasses = ["btn"];
  if (props.defaultClass) {
    btnClasses.push(props.defaultClass);
  }
  if (props.isPrimay) {
    btnClasses.push("btn-primary");
  } else {
    btnClasses.push('btn-success');
  }

  return (
    <button onClick={props.onClickHandler} className={btnClasses.join(" ")}>
      {props.value}
    </button>
  );

};

export default Button;
