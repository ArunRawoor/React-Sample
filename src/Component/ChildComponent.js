// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Hello, this is from the child component name: {props.name}!</p>
      <p>Your age is: {props.age}.</p>
      <p>you gender is: {props.gender}</p>
      <p>you PhonNo is : {props.number}</p>

    </div>
  );
};

export default ChildComponent;
