import React, { Fragment, useState, useRef } from "react";
import "./App.css";

function Greeting(props) {
    let element;
    if (props.text) {
      element = (
        <p>
            Hello! I'm Nathan and I'm a Software Developer. Pleased to meet you!
        </p>
      );
    } else {
      element = (
        <p>
            Hello! I'm Jane and I'm a Frontend Developer. Pleased to meet you!
        </p>
      );
    }
    return (
      <div>
        {element}
        <ChangeGreeting handleClick={props.handleClick} />
      </div>
    );
  }
  
function ChangeGreeting(props) {
  return (
    <button type="button" onClick={props.handleClick}>
      Toggle Name
    </button>
  );
}
      
function ComponentStudy() {
    const [textSwitch, setTextSwitch] = useState(true);
    return (
      <div>
        <Greeting
          text={textSwitch}
          handleClick={() => setTextSwitch(!textSwitch)}
        />
      </div>
    );
  }
  

// Props
/*
const Greeting = (props) => {
    return 
        <p>        
            Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
            Nice to meet you!
            {props.children}
        </p>
}

Greeting.defaultProps={
    name: "Guest",
    age: 20,
    occupation: "Freerancer"
}

Greeting.propTypes={
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

function ComponentStudy() {
    const name = "Kim";
    const age = 25;

  return (
    <div>
      <h1>ComponentStudy</h1>
      <Greeting name={name} age={age} occupation="Software Developer"></Greeting>
      <Greeting name={"Lee"} age={30} occupation="Software Developer"></Greeting>
      <Greeting occupationb="Software Developer"></Greeting>
    </div>
  );
}
*/

export default ComponentStudy;


