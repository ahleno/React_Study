import React, { Fragment, useState, useRef } from "react";
import "./App.css";

const Greeting = (props) => {
    return <p>Hello! {props.name} {props.age}</p>
}

function ComponentStudy() {
    const name = "kim";
    const age = 25;

  return (
    <div>
      <h1>ComponentStudy</h1>
      <Greeting name={name} age={age}></Greeting>
    </div>
  );
}

export default ComponentStudy;
