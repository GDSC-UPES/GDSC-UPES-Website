import React from "react";
import "./Button.css";

export default function Button(props) {
  const style = {
    backgoundColor: `${props.backgoundColor}`,
    height: `${props.buttonSize}`,
    width: `${props.buttonWidth}`,
    borderRadius: `${props.borderRadius}`,
    borderTopLeftRadius: `${props.TopLeft_Radius}`,
    borderBottomLeftRadius: `${props.BottomLeft_Radius}`,
    borderTopRightRadius: `${props.TopRight_Radius}`,
    borderBottomRightRadius: `${props.BottomRight_Radius}`,
  };

  // const handleOnClick = () => {};
  return (
    <div>
      <button
        className={`col-lg-${props.column} btn btn-primary ${props.btn_customStyle}`}
        style={style}
        onClick={props.handleOnClick}
      >
        {props.text}
      </button>
    </div>
  );
}