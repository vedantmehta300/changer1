import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <>
      <div className="card">
        <p
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={props.clicked}
        >
          I am {props.name} and I am {props.age} years old
        </p>
        <input type="text" onChange={props.changed} Value={props.name} />
      </div>
    </>
  );
};

export default Person;
