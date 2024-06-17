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
