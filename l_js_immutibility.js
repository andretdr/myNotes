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
  SLICE
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
