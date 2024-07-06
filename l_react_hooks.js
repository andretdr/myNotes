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
    const [count, setCount] = useState(0) // 0 is the default for the state count
    const [user, setUser] = useState({isSubscribed: true, name: 'Kouki'}) // default value

    const handleIncrement = () => setCount(count+1) // here we set how we want to change the state
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
// Concurrency Issue
// https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
////////////////////////////////


// import the useState hook
import { useState } from 'react'

// initialise state
// count is the var, setCount is the name of function you want to update the state with, initial state set at 0 each time app loads

// var and setFunction(this is just the name. dont have to implement it) pairs. useState sets the state behind the scences
const [count, setCount] = useState(0) // 0 is the default for the state count
// once state is updated, will cause rerender of component.

// SETSTATE WITH CALLBACK
// https://dev.to/csituma/when-do-you-use-setstate-with-a-callback-1f3g


    
// USEEFFECT HOOK
///////////////////////////////
// https://www.youtube.com/watch?v=-4XpG5_Lj_o&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=2
// for doing sometype of side effect. Side effect mostly comes from state change
// SETSTATE IS ASYNCHRONOUS
// therefore to correctly use {count} after setState you need to use useEffect hook


    
    // this will error out
    <button onClick={() => {
          setCount(count+1)
          console.log(count)
    }}>Add 1</button>

    // instead, use
    useEffect(() => {
    // code 
    .....
    // optional return function
    }, 
    []); //dependancies are what it should listen to

    useEffect(() => {console.log(value)}, [value]);

    // Also, instead of 
    setCount(count+1)

    // use
    setCount((prevCount) => prevCount+1)

// useEffect DEPENDENCIES
// useEffect accepts 2 arguments, callback and array of dependencies
// if array of dependencies is empty, callback will execute ONCE AFTER COMPONENT MOUNTS
useEffect(() => { console.log('component rendered!'}, [])

// if we want callback to execute AFTER VAR STATE CHANGES, do
useEffect(() => { console.log('count changed!'}, [count])

// can be used to run CLEANUP FUNCTION on unmounts. WHEN you have a RETURN FUNCTION, it RETURNS ON COMPONENT UNMOUNT, the next time useEffect is triggered. set timeout ETC
// https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
useEffect(() => { fetchDate() return cleanUp()}, [])


// USECONTEXT HOOK
//////////////////////////////
// having a seperate 'context' which stores global state that can be accessed by anyone from anywhere without using props

// this one does it without external file
// https://www.youtube.com/watch?v=5ianRgE5ByU


// typically have a context folder w Context.j n ContextProvider.js

/// Context.js 
// initialise state PREFERED SOLUTION
import { createContext } from 'react'
// createContext with initial state null
const Context = createContext()
export default Context


// contextProvider is a high order component. Component that returns a component
/// ContextProvider.js
import { useState } from 'react'
import Context from './Context'

// Can remove the {{children}}
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



// In our components that need to react, we do
import { useContext, useState } from 'react'
import Context from '../../context/Context'

const Header = () => {
    // using from context
    const { darkModeOn, setDarkModeOn, englishLanguage, setEnglishLanguage } = useContext(Context)
    // ALT SOLUTION
    const user = useUserContext() // from custom hook to ensure no undefined error
    
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
// similar to useSTATE but handles complex state logic in a more modular way
// https://www.youtube.com/watch?v=rgp_iCVS8ys&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=7
    
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



// MEMOIZATION
/////////////////////////////


const MyComponent = React.memo(({name}) => {
    return ....
}

will not re-render UNLESS name changes. if not, will not render



// useCALLBACK
/////////////////////
//  used for functions

// functions will also re-render each time. If dont want function to re-render, use call back
const handleIncrement = useCallback(() => {
    .....
}, []);
