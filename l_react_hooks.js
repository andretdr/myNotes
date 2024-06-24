// 2023 Jan
// https://www.freecodecamp.org/news/full-guide-to-react-hooks/

// IN OLD REACT WE USE CLASSES AND STATES, AND SET STATE
//////////////////////////////////////////////////////////////

import React from "react"

class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
    }

    handleIncrement = () => { this.setState(prevState => {
        return { count: prevState.count - 1 };
      })}

    handleDecrement = () => { this.setState(prevState => {
        return { count: prevState.count + 1 };
      })}

    render() {

      return (
        <div className="App">

          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>

          <h2>{this.state.count}</h2>
        </div>
    )}}

  export default Counter

// HOOKS LET US USE FUNCTIONAL COMOPONENTS FOR STATES AND EVENTS
/////////////////////////////////////////////////////////////////////////
// REwritting above, we get

import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

            <h2>{count}</h2>
        </div>                    
    )
}

// UseState Hook
////////////////////////////////

