// SUMMARY
// REDUX STORE HOLDS THE ULTIMATE STATES FOR THE APP
// ACTION OBJECTS HAVE TYPE (type of action) AND MAYBE DATA
//   TYPE IS USUALLY A PREDECLARED CONST
//   ACTION CREATORS ARE FUNCTIONS THAT RETURN ACTION OBJ
// STATE CAN BE OBJECT OR NOT
// REDUCERS TAKE IN STATE AND ACTION FUNCTIONS AND RETURN STATE
//  YOU INITIALISE DEFAULT STATE IN HERE
!!  BECAREFUL NOT TO OVERWRITE OTHER STATE INFO FROM OTHER REDUCERS WHEN YOU RETURN YR STATE !!
//  ENSURE THAT YR STATE RETURNS ARE IMMUTABLE
//  MULTIPLE REDUCERS ARE COMBINED INTO ROOT REDUCER
// STORE.DISPATCH TAKES IN ACTION CREATOR OR ACTION OBJ
//  USES ROOT REDUCER TO RETURN STATE FROM ACTION AND STORE STORES IT
// STORE.SUBSCRIBE TAKES IN CALLBACK WHICH RUNS EACH TIME ACTION IS DISPATCHED
// ASYNC READ BELOW


// INITIALISE
// REDUX STORE HOUSES THE ENTIRE STATE OF THE APP. IT IS THE SINGLE SOURCE OF TRUTH
// redux store obj takes in a REDUCER FUNCTION. It takes in STATE and ACTION and outputs a STATE 
// BE MINDFUL NOT TO OVERIDE OTHER STATE INFO WHEN YOU RETURN THIS STATE
// USE SPREAD return ({ ...state, todos: ['dinrkl milk']})

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

=============
// DISPATCH
=============
// store.dispatch() takes in ACTION OBJ and uses REDUCER FUNCTION to return a STATE which store saves
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

===================
// STORE.SUBSCRIBE
// for listener functions, SUBSCRIBE will run yr callback functions WHENEVER an action is dispatched against the store
===================
  
  store.subscribe(()=>{
    // update global count whenever action is dispatched
    count ++;
  })

===================================
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

===============
// SENDING DATA IN ACTIONS
// JUST ADD THE DATA IN THE ACTION OBJECT OR ACTION CREATOR
===============
  
  const ADD_NOTE = 'ADD_NOTE';
  
  // ACTION CREATOR
  const addNoteText = (note) => { return {type: ADD_NOTE, text: note}};
  
  // REDUCER
  const notesReducer = (state = 'Initial State', action) => {
    switch(action.type) {
      case ADD_NOTE:
        return (action.text)
      default:
        return state;
  }};
  
  const store = Redux.createStore(notesReducer);
  
  console.log(store.getState());
  store.dispatch(addNoteText('Hello!'));
  console.log(store.getState());


=================
// MIDDLEWARE FOR ASYNC ACTIONS
// REDUX THUNK middleware
=================
  // INITIALIZE
  const store = Redux.createStore(
  // any reducer
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
  );
  
  // FULL EXAMPLE
  // ACTION TYPE DECLARATIONS
  const REQUESTING_DATA = 'REQUESTING_DATA'
  const RECEIVED_DATA = 'RECEIVED_DATA'

  // just some ACTION OBJs
  const requestingData = () => { return {type: REQUESTING_DATA} }
  const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }
  
  // Use a SPECIAL ASYNC ACTION CREATOR which RETURNS a FUNCTION which uses DISPATCH as an arg  
  const handleAsync = () => {
    return function(dispatch) {
      // Dispatch request action here
      dispatch(requestingData())
      // Simulating async process
      setTimeout(function() {
        let data = {
          users: ['Jeff', 'William', 'Alice']
        }
        // Dispatch received data action here
      dispatch(receivedData(data))
      }, 2500);
    }};
  
  const defaultState = {fetching: false, users: []};

  // JUST A REDUCER, reducing action into state
  const asyncDataReducer = (state = defaultState, action) => {
    switch(action.type) {
      case REQUESTING_DATA:
        return {fetching: true, users: []}
      case RECEIVED_DATA:
        return {fetching: false, users: action.users}
      default:
        return state;
  }};
  
  const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
  );



=========================================
  EXAMPLE
=========================================
// OBJECT TYPES DECLARATION
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) =>{
  if (action.type === INCREMENT){
      return state+1;}
  else if (action.type === DECREMENT){
      return state-1;}
  else {return state;}
}

// Define an action creator for incrementing
const incAction = () =>{
  return {type: INCREMENT}
}

// Define an action creator for decrementing
const decAction = () =>{
  return {type: DECREMENT}
}

// Define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);

======================================
IMMUTABILITY EXAMPLE ENSURE REDUCERS DONT MUTATE STATE BUT RETURN NEW VALUE
======================================
  
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

// Action Creator
const addToDo = (todo) => {return {type: ADD_TO_DO, todo}}

// Reducer
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const store = Redux.createStore(immutableReducer);

===============================
JS SPREAD ... https://www.w3schools.com/react/react_es6_spread.asp
===============================

  const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        let newState = [...state, action.todo];
        return newState;
      default:
        return state;
    }};
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }}
  
  const store = Redux.createStore(immutableReducer);

=======================================

// REMOVE ITEM INDEX FROM ARRAY USING SLICE
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [...state.slice(0, action.index), ...state.slice(action.index+1, state.length+1)]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
}}

const store = Redux.createStore(immutableReducer);


==========================================
  OBJECT.ASSIGN() FOR COPYING OBJECTS
==========================================
// https://www.w3schools.com/jsref/jsref_object_assign.asp

// Create Target Object
const person1 = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

// Create Source Object
const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target, create newObj. 
// {} is important to create new object and not modify old one
const newObj = Object.assign({}, person1, person2);

=======================
  // example
  
const defaultState = {user: 'CamperBot', status: 'offline', friends: '732,982', community: 'freeCodeCamp'};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      const sourceState = {status: 'online'};
      return Object.assign({}, state, sourceState);
    default:
      return state;
}};


