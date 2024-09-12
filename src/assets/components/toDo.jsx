import React from "react";
import "../components/toDo.css";
import { useState } from "react";

function ToDo(props) {
  // console.log(props.onChecked)

  return (
    <div className="eachitem">
      <li>
        {props.text}
      </li>
      <i
        className="fa fa-trash"
        onClick={() => props.onChecked(props.id)}
        style={{ color: "white" }}
      ></i>
    </div>
  );
}

export default ToDo;
