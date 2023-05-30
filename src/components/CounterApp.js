// import React from "react";
import { useState } from "react";
import React, { Component } from "react";
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


class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    return (
      <body style={divStyle}>
        <div style={buttonDiv}>
          <button
            style={buttonStyle}
            variant="contained"
            onClick={this.decrement}
          >
            -
          </button>
        </div>
        <div>
          <p>Counter: {this.state.count}</p>
        </div>
        <div style={buttonDiv}>
          <button
            style={buttonStyle}
            variant="contained"
            onClick={this.increment}
          >
            +
          </button>
        </div>
      </body>
    );
  }
}

export default CounterApp;

// export function CounterApp() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount((prevCount) => prevCount - 1);
//     }
//   };

//   return (
//     <body style={divStyle}>
//       <div style={buttonDiv}>
//         <button style={buttonStyle} variant="contained" onClick={decrement}>
//           -
//         </button>
//       </div>
//       <div>
//         <p>Counter: {count}</p>
//       </div>
//       <div style={buttonDiv}>
//         <button style={buttonStyle} variant="contained" onClick={increment}>
//           +
//         </button>
//       </div>
//     </body>
//   );
// }
