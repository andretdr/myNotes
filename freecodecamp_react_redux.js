// USING REACT WITH REDUX

// BUILDING A REACT COMPONENT FIRST
// this component has its own STATE

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '', messages: []}
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event){
    this.setState({input: event.target.value}); 
  }

  submitMessage(){
    this.setState((state)=>({messages: state.messages.concat(state.input)}));
    this.setState({input: ''});
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>SUBMIT</button>
        <ul>{this.state.messages.map((item)=>{return <li>{item}</li>})}</ul>
      </div>
    );}};


// BUILDING THE REDUX BIT

// TYPE
const ADD = 'ADD';

// action creator
const addMessage = (message) => {return {type: ADD, message};}

// reducer
const messageReducer = (state=[], action) => {
  if (action.type === ADD) return ([...state, action.message]);
  else return (state);
};

const store = Redux.createStore(messageReducer);

======================================
// REACT-REDUX PROVIDER
======================================
// PROVIDER takes 2 props, REDUX STORE and CHILD COMPONENTS of APP

  // EXAMPLE
  const Provider = ReactRedux.Provider;

  <Provider store={store}>
    <App/>
  </Provider>

  // FOR OUR EXCERCISE FROM ABOVE,
  const Provider = ReactRedux.Provider;
  
  class AppWrapper extends React.Component {
    render(){
      return (
        <Provider store={store}>
          <DisplayMessages/>
        </Provider>
      )}};


// MAPSTATETOPROPS
===========================
// using STORE.SUBSCRIBE() to implement mapStateToProps()
// here we say what state you want to map to a props

// state
const state = [];

// REACT props messages, mapped to REDUX state
const mapStateToProps = (state) => {return {messages: state}}  

// MAPDISPATCHTOPROPS
============================
  // using STORE.DISPATCH() to implement mapDispatchToProps()
  // here we say what function(){dispatch(ACTIONCREATOR)} you want to map to a props

// action creator
const addMessage = (message) => {return {type: 'ADD', message: message}};

// REACT props submitNewMessage, mapped to REDUX (message)=>{dispatch(addMessage(message))}
const mapDispatchToProps = (dispatch) => {
  return ({submitNewMessage: (message) => {dispatch(addMessage(message))}})
}

  









  
