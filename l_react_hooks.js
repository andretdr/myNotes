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

    // var and setFunction pairs
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

// USESTATE HOOK
////////////////////////////////

// import the useState hook
import { useState } from 'react'

// initialise state
// count is the var, setCount is the name of function you want to update the state with, initial state set at 0 each time app loads

// var and setFunction pairs
const [count, setCount] = useState(0)
// once state is updated, will cause rerender of component.
    
// USEEFFECT HOOK
///////////////////////////////
// SETSTATE IS ASYNCHRONOUS
// therefore to correctly use {count} after setState you need to use useEffect hook

    // this will error out
    <button onClick={() => {
          setCount(count+1)
          console.log(count)
    }}>Add 1</button>

    // instead, use
    useEffect(() => console.log(value), [value])

    // Also, instead of 
    setCount(count+1)

    // use
    setCount((prevCount) => prevCount+1)

// useEffect allows you to use side effects.
// useEffect accepts 2 arguments, callback and array of dependencies
// if array of dependencies is empty, callback will execute AFTER COMPONENT RENDERS
useEffect(() => { console.log('component rendered!'}, [])

// if we want callback to execute AFTER VAR STATE CHANGES, do
useEffect(() => { console.log('count changed!'}, [count])

// can be used to run cleanUp functions on unmounts. WHEN COMPONENTS UNMOUNT, do
// https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
useEffect(() => { fetchDate() return cleanUp()}, [])


// USECONTEXT HOOK
//////////////////////////////
// having a seperate 'context' which stores global state that can be accessed by anyone from anywhere without using props

// typically have a context folder w Context.j n ContextProvider.js

/// Context.js 
// initialise state
import { createContext } from 'react'
// createContext with initial state null
const Context = createContext(null)

export default Context

// contextProvider is a high order component. Component that returns a component
/// ContextProvider.js
import { useState } from 'react'
import Context from './Context'

const ContextProvider = ({children}) => {
    // var and setFunction pairs
    const [darkModeOn, setDarkModeOn] = useState(true)
    const [englishLanguage, setEnglishLanguage] = useState(true)

    return (
        <Context.Provider value={{
            darkModeOn,
            setDarkModeOn,
            englishLanguage,
            setEnglishLanguage
        }} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

// In app.js, we wrap all the components we want to interact w contextProvider.
import ContextProvider from './context/ContextProvider'

export default function App() {
  return (
    <ContextProvider>
        <App />
    </ContextProvider>
  )
}

// In our components that need to react, we do
import { useContext, useState } from 'react'
import Context from '../../context/Context'

const Header = () => {
    // using from context
    const { darkModeOn, setDarkModeOn, englishLanguage, setEnglishLanguage } = useContext(Context)
    // local state
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    // function based on local state
    const openMobileMenu = () => {
        document.body.classList.add('mobileMenu-open')
        setShowMobileMenu(true)
    }

    // function based on Context state
    const toggleEnglish = () => {
        if (englishLanguage){
            console.log('english!');
            setEnglishLanguage(false);
        }
    }


// USEREDUCER HOOK
//////////////////////////////////////////////////////

// using reducers to manage state interactions
// App.js

import { useReducer } from 'react'

function App() {

    // an action has a TYPE (type of action) 
    // const LOGIN = 'LOGIN'; {type: LOGIN};

    // reducer takes an action, state and returns a state
    // usually a if/then or switch
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD': return { count: state.count + 1 }
      case 'SUB': return { count: state.count - 1 }
      case 'ADD10': return { count: state.count + 10 }
      case 'SUB10': return { count: state.count - 10 }
      case 'RESET': return { count: 0 }
      default: return state
    }
  }

    // USING THE REDUCER HOOK
    // declare var for state, here is state
    // declare name for function to modify it, here dispatch
    // useReducer will take in reducer function as 1st param, and default state as 2nd param
  const [state, dispatch] = useReducer(reducer, { count: 0 })  

  return (
    <div className="App">
      <p>Count is: {state.count}</p>

      <div>
    // WHEN WE WANT TO IMPLEMENT THE ACTION, WE JUST USE THE 'DISPATCH' WE DECLARED, useReducer WILL AUTO UPDATE THE STATE FOR US
        <button onClick={() => dispatch({type: 'ADD'})}>Add 1</button>
        <button onClick={() => dispatch({type: 'SUB'})}>Decrease 1</button>
        <button onClick={() => dispatch({type: 'ADD10'})}>Add 10</button>
        <button onClick={() => dispatch({type: 'SUB10'})}>Decrease 10</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset count</button>
      </div>
    </div>
  )
}

export default App


// USEREF HOOK
//////////////////////////////

const ref = useRef(initialValue)
ref.current is ref value,
ref.current = newValue updates ref value

// udating ref doesnt trigger re-render

// logging numbre of clicks
import { useRef } from 'react';

function LogButtonClicks() {
    const countRef = useRef(0);
    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };
    
    console.log('I rendered!');
    
    return <button onClick={handle}>Click me</button>;
}
