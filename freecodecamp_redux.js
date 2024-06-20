// INITIALISE
// REDUX STORE HOUSES THE ENTIRE STATE OF THE APP. IT IS THE SINGLE SOURCE OF TRUTH
// redux store obj takes in a REDUCER FUNCTION. It takes in STATE and ACTION and outputs a STATE 

  // setting default state here (state = 5)
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
// TYPE IS CONVENTIONALLY A CONST
  const LOGIN = 'LOGIN'
  const action = {type: LOGIN}


// ACTION CREATOR
// a function that creates ACTION objects
  const LOGIN = 'LOGIN'
  const actionCreator = () => {
    return {type: LOGIN}
  }


// DISPATCH
// store.dispatch() takes in ACTION OBJ and passes value to the STORE
  store.dispatch(actionCreator());
  store.dispatch({ type: LOGIN});


// REDUCER FUNCTION
// It takes in STATE and ACTION and outputs a STATE 
// ENFORCE IMMUTABILITY yrself

  const defaultState = {login: false};
  const loginAction = () => {return {type: LOGIN}};

  const reducer = (state = defaultState, action) => {
      return (action['type'] === LOGIN)
      ? {login: true}
      : state
  };

  const store = Redux.createStore(reducer);


// USING SWTICH FOR REDUCER
  // types usually constant
  const LOGIN = 'LOGIN'
  const LOGIN = 'LOGIN'
  
  const loginUser = () => {return {type: LOGIN}};
  const logoutUser = () => {return {type: LOGOUT}};

  const authReducer = (state = defaultState, action) => {
    switch (action.type){
    case LOGIN:
      return {authenticated: true};
    case LOGOUT:
      return {authenticated: false};
    default:
      return state;
    }
  };


// STORE.SUBSCRIBE
// for listener functions, SUBSCRIBE will run yr callback functions WHENEVER an action is dispatched against the store
  
  store.subscribe(()=>{
    // update global count whenever action is dispatched
    count ++;
  })


// COMBINING MULTIPLE REDUCERS INTO ROOT REDUCER
// using combineReducers() method
// ==========  Example  ===========

  const rootReducer = Redux.combineReducers({
    // KEY : REDUCER FUNCTION NAME
    // KEY is used to for the piece of application state by REDUX
    auth: authenticationReducer,
    notes: notesReducer
  });

// ================================

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }};

const rootReducer = Redux.combineReducers({
  counter: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);















