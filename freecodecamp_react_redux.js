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


===========================
// CONNECT METHOD
===========================
// TAKES 2 OPTIONAL ARGUMENTS, mapStateToProps() and mapDispatchToProps()
// If you want to omit one of the arguments to the connect method, you pass null in its place.
  
  connect(mapStateToProps, mapDispatchToProps)(MyComponent)

// action creator
const addMessage = (message) => {return {type: 'ADD', message: message}};
// mapStateToProps
const mapStateToProps = (state) => {return {messages: state}};
// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {return {
    submitNewMessage: (message) => {dispatch(addMessage(message));}}}

class Presentational extends React.Component {
  constructor(props) {super(props);}
  render() {return <h3>This is a Presentational Component</h3>}};

const connect = ReactRedux.connect;
// Now Presentational component is connected
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
  


==============================
// PRESENTAIONAL components are REACT COMPONENTS NOT DIRECTLY CONNECTED TO REDUX
// CONTAINER components are REACT COMPONENTS DIRECTLY CONNECTED TO REDUX, DISPATCHING ACTION and passing STATE
==============================

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
.......
    
// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }}};

const Provider = ReactRedux.Provider;

const connect = ReactRedux.connect;
// Now your Presentational Component is a Container Component because its CONNECTED
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <Provider store={store}>
      <Container/>
    </Provider>
    )}};


==============================================
// USING REDUX DONT NEED LOCAL STATE IN REACT
==============================================
// CHANGE IT SUCH THAT message is now handled by REDUX, not REACT

// REDUX: WE DESIGN WHAT WE WHAT TO DO W THE STATE, AND ACTION, in this case ADD MESSAGE
// type initializing
const ADD = 'ADD';

// action creator
const addMessage = (message) => {
  return {type: ADD, message: message}};

// reducer
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }};

// create the store
const store = Redux.createStore(messageReducer);

// REACT: VIEW

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    // local state just for input.
    // message is handled by REDUX now
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      // changing local state here
      input: event.target.value
    });
  }

  submitMessage() {
      // changing REDUX state here, this.props.submitNewMessage is mapped below
    this.props.submitNewMessage(this.state.input);
      // changing local state here
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          // this.props.messages is mapped below
          {this.props.messages.map( (message, idx) => {return (
            <li key={idx}>{message}</li>
            )})}
        </ul>
      </div>
    );}};

// MAPPINGS HERE
// props.messages is mapped to the state
const mapStateToProps = (state) => {
  return {messages: state}
};

// props.submitNewMessage is mapped to a function calling REDUX to dispatch(addMessage action creator) with the new message data passed in
const mapDispatchToProps = (dispatch) => {
  return {submitNewMessage: (message) => {
      dispatch(addMessage(message))}}};

// CONNECT will enable the Presentational component to use REDUX
const connect = ReactRedux.connect;
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

// WRAPPER allows you to render the CONTAINER
const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );}};



  







  
