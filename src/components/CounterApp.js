import React from "react";
import { useState } from "react";
// import styled from 'style-components';

const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'Times New Roman, Times, serif',
};

const buttonDiv = {
  margin: '10px',
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '4px',
  fontSize: '20px',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
};
export function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <body style={divStyle}>
      <div style={buttonDiv}>
        <button style={buttonStyle} variant="contained" onClick={decrement}>
          -
        </button>
      </div>
      <div>
        <p>Counter: {count}</p>
      </div>
      <div style={buttonDiv}>
        <button style={buttonStyle} variant="contained" onClick={increment}>
          +
        </button>
      </div>
    </body>
  );
}
