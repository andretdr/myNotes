// INITIALISE
// REDUX STORE HOUSES THE ENTIRE STATE OF THE APP. IT IS THE SINGLE SOURCE OF TRUTH
// redux store obj takes in a REDUCER FUNCTION. It takes in STATE and ACTION and outputs a STATE 

  // default variable (state = 5)
  const reducer = (state = 5) => {
    return state;
  }
  
  // create the new store object
  const store = Redux.createStore(reducer);

  // OR ELSE MORE CONCISELY
  const store = Redux.createStore(
    (state = 5) => state
  );


// STATE
// STATE can be an object, or not  
const defaultState = {
    login: false
  };


// GET STATE
// store.getState()
  let currentState = store.getState();


// ACTIONS
// ACTIONS
// action is an event from the app that will change the state of the store.
// MUST carry a TYPE property, data is optional
  const action = {type: 'LOGIN'}


// ACTION CREATOR
// a function that creates ACTION objects
  
  const actionCreator = () => {
    return {type: 'LOGIN'}
  }


// DISPATCH
// store.dispatch() takes in ACTION OBJ and passes value to the STORE
  store.dispatch(actionCreator());
  store.dispatch({ type: 'LOGIN' });


// REDUCER FUNCTION
// It takes in STATE and ACTION and outputs a STATE 
// ENFORCE IMMUTABILITY yrself

  const defaultState = {login: false};
  const loginAction = () => {return {type: 'LOGIN'}};

  const reducer = (state = defaultState, action) => {
      return (action['type'] === 'LOGIN')
      ? {login: true}
      : state
  };

  const store = Redux.createStore(reducer);





















