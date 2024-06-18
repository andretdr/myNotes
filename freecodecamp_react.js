// Add/ remove Event Listeners to COMPONENTDIDMOUNT n 
// WILLUNMOUNT CLEANUP METHOD
// https://www.youtube.com/watch?v=AZXJzYbmgm0

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  // use for setting up 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  // Use for cleaning up. chat sockets, etc
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};



// Component Lifecycle, DIDMOUNT, USE FOR API OR SERVER CALLS, eventlistener. Then, RENDER in the render function. Will then be accurate.
// https://www.youtube.com/watch?v=-S_WnDl9orU

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };}

// will only run ONCE, when AFTER render. When state is updated, render will RE-render
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }

  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );}
}


// Component Lifecycle, WILLMOUNT MIGHT BECOME DEPRECIATED

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('hi')
  }
  render() {
    return <div />
  }
};


// PASSING FUNCTION DOWN TO CHILD

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
       </div>
    );}
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
// passing these values down from parent
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );}
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );}
};


// Pass State as Props to Child Components

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
           <Navbar name={this.state.name} />
         </div>
    );}
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );}
};


// CONTROLLED FORM

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState((state)=>({submit:state.input}));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}


// Controlled input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({input: event.target.value})
  }


  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}/>

        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};



// USING SET STATE

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
  }

  increment(){
    this.setState((state)=>({count:state.count+1}));
  }

  decrement(){
    this.setState((state)=>({count:state.count-1}));
  }

  reset(){
    this.setState({count: 0});
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

// USING SET STATE

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  
    this.toggleVisibility = this.toggleVisibility.bind(this);

  }
 
// CANNOT DO IT THIS WAY AS STATE IS ASYNC
// toggleVisibility(){ 
//  this.setState({this.state.visibility: !this.state.visibility});
// }

// have to input a function
  toggleVisibility(){ 
    this.setState((state) => ({visibility : !state.visibility}));
  }
 
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}



// BINDING THIS

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
  // binding the method to this
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};




// STATEFUL COMPONENTS

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};


// STATEFUL COMPONENTS

class StatefulComponent extends React.Component {
  constructor(props) {

    super(props);

    this.state = {firstName : "name"}

  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

// DEFAULT PROP / PROP TYPES

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

ShoppingCart.defaultProps = {quantity:10}

ShoppingCart.propTypes = {quantity : PropTypes.number.isRequired}
