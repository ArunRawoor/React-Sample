// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      
   <ChildComponent   name="Abcd" age={28} gender="None" number={1234567890}/>
    </div>
  );
};

export default ParentComponent;
