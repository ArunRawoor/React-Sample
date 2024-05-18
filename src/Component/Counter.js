import React, { useState } from 'react';

const Counter = () => {
  // useState hook to manage the count state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button to increment and Decrement the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

    </div>
  );
}

export default Counter;
