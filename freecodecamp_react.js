// REACTDOMSERVER RENDERTOSTRING
//https://www.freecodecamp.org/learn/front-end-development-libraries/react/render-react-on-the-server-with-rendertostring

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// render the entire page to string as HTML for SERVER
ReactDOMServer.renderToString(<App/>)



// USING MAP AND FILTER 2

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }

  render() {
    const usersOnline = this.state.users.filter(
      item=>{return item.online}
      );

    const renderOnline = usersOnline.map(
      item=>{return <li key={item.username}>{item.username}</li>}
      );

    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );}
}

// GIVING LIST ITEMS IN <li></li> A UNIQUE KEY VALUE
// https://legacy.reactjs.org/docs/lists-and-keys.html

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(
    item=>{
      // GIVING EACH LIST ITEM A UNIQUE KEY, THIS ONE IS THE ACTUAL VALUE
      // ALTERNATIVELY BUT SHOULD BE AVOIDED IS USING THE INDEX
      // <li key={index}>{item}</li>
      
      return <li key={item}>{item}</li>
      }
  );
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );};


// USING ARRAY SPLIT AND MAP

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      toDoList: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {

    // SPLIT
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {

    // MAP
    const items = this.state.toDoList.map(
      item=>{ return <li>{item}</li>});
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );}
}


// Changing style CONDITIONALLY

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value })
  }

  render() {
    let inputStyle;
    (this.state.input.length <= 15)
      ? inputStyle = {border: '1px solid black'}
      : inputStyle = {border: '3px solid red'}

    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );}
};



// RENDER CONDITIONALLY FROM PROPS

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>
    {this.props.fiftyFifty ? 'You Win!':'You Lose!'}
          </h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
  // THIS IS A DIFFERENT WAY TO SET THE STATE FROM PREVIOUS, BUT IT WORKS
    this.setState(prevState => {
      return {
        counter: prevState.counter+1
      }
    });
  }
  render() {
    const expression = (Math.random() >= .5);
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty = {expression}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );}
}

// TERNARY OPERATOR

const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      userAge: ''
    }

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }

  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }

  render() {

    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;

    console.log(this.state.userAge);

    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />

      // HEREEEEEEEEEEEEEEEEE
          
      {
        !this.state.userAge 
          ? buttonOne 
          : (this.state.userAge >= 18) 
            ? buttonTwo 
            : buttonThree
        }

      </div>
    );
  }
}



// && CONDITIONAL MARKUP

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
    // DOES THE SAME THING AS BELOW BUT MORE CONCISE
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};


// ADDING JS in the render method 2

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }

  render() {
    // RETURNING DIFFERENT VIEWS DEPENDING ON STATE
    if (this.state.display)
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    else
      return(
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );}
};

// ADDING JS in the render method

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
}}


// STYLING INLINE with CONST

const styles = {color:'purple', fontSize:40, border:'2px solid purple'}

// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};

// STYLING INLINE

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color:'red', fontSize:'72px'}}>Big Red</div>
    );
  }
};




// SHOULDCOMPONENTUPDATE, DIDUPDATE did just update.
// DIDUPDATE runs each time state changes

// USING LOCAL STORAGE(CACHE) for FORMS https://www.youtube.com/watch?v=2-lgIQEja5U

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    if (nextProps.value % 2 === 0)
        return true;
    else
        return false;
  }

  componentDidUpdate() {
    console.log('Component re-rendered.');
  }

  render() {
    return <h1>{this.props.value}</h1>;
}}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
}}



// Add/ remove Event Listeners to COMPONENTDIDMOUNT did just mount. n 
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
// MOUNT happens ONCE
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

// JSX is CAMELCASE, HTML is KEBABCASE
// STATEFUL COMPONENTS
=========================

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


=====================
// PROPS
=====================

const Welcome = (props) => <h1>Hello, {props.user}!</h1>

<App>
  // pass the prop.user to Welome component
  <Welcome user='Mark' />
</App>

// PASSING PROPS AS ARRAY
========================
  // you can now use array methods on the prop array here
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

<ParentComponent>
  // use the {} for the array
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>

// DEFINING DEFAULT PROPS AND ENFORCING PROP TYPES
=========================
  // if no value is provide, it will use the default

  const ShoppingCart = (props) => {
  return (<div>
            <h1>Shopping Cart Component</h1>
                    // USE PROPS.QUANTITY
            <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
          </div>)};

  ShoppingCart.defaultProps = {quantity: 10}

  ShoppingCart.propTypes = {quantity: PropTypes.number.isRequired}
  ShoppingCart.propTypes = {handleClick: PropTypes.func.isRequired}

  // another class calls the ShoppingCart Component
  class OtherClass extends...
  .....
  render() {
    return <ShoppingCart quantity={100} />
  }

// CLASS COMPONENTS USE THIS.PROPS
===============================
  class ShoppingCart extends....
  .....
  render() {
    return (<div>
            <h1>Shopping Cart Component</h1>
                      // USE THIS.PROPS.QUANTITY
            <h1>Current Quantity of Items in Cart: {this.props.quantity}</h1>
          </div>)};
  }
    
===================================  
// TO RENDER COMPONENTS
==================================
// THIS IS DEPRECIATED! ReactDOM.render(<App/>, document.getElementById('challenge-node'))
// INSTEAD, DO
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);

  root.render(<App />);
  
  
// REACT CLASS(STATEFUL) COMPONENT
// ALWAYS render() {return (...)} some JSX ELEMENT which can be another <COMPONENT /> as well. this is called COMPOSITION
// YOU CAN NEST COMPOSITION
// Always starts with CAPITAL LETTER
====================================
  class ComponentClass extends React.Component {
  constructor(props) {
    // calling super constructor passing in props
    super(props);
  
    // initializing state
    this.state = {
      counter : 0,
      message : [],
      input : ''
    }
  }

  // binding methods to THIS
  this.getCounter() = this.getCounter().bind(this)
  this.setMessage() = this.setMessage().bind(this)
  
  // methods
  getCounter(){}
  setMessage(){}

  // RENDER
  render() {
    return (
      <h1>Hi</h1>
    );
  }
}


  
// REACT STATELESS FUNCTIONAL COMPONENT
// Always returns some JSX ELEMENT which can be another <COMPONENT /> as well. this is called COMPOSITION
// Always starts with CAPITAL LETTER
====================================
  const Component = () =>{
    return (
      <>
        <h1>Hi</h1>
        <div className='customClass' />
      <>
  );}

  
// MUST ALWAYS SELF CLOSE THE TAG IF NOT OPENING/CLOSING TAG
======================================
  <br />
  <hr />

  
// USING CLASSNAME
// className instead of class
====================================
  
  const JSX = (
  <div>
    // className instead of class
    <h1 className='my-class'>Add a class to this div</h1>
    // onClick, onChange instead of onclick, onchange etc
    <button onClick={myFunction}>Submit</button>
  </div>
);
  

// REACT CONST ELEMENTS
==========================
  
const JSX = <section>
              <h1>Hello JSX!</h1>;
              <button>submit</button>
            </section>

const JSX2 = <>
              <h1>Hello JSX!</h1>;
              <button>submit</button>
             <>

==================================
// TO RENDER JSX, 1st arg is the componentToRender, 2nd arg is the targetNode
==================================
ReactDOM.render(JSX, document.getElementById('challenge-node'))

===============
// HTML SETUP
===============

  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  
  <body>
    <!-- Default container for site content -->
    <div id="root"></div>
  
    <!-- LOAD REACT -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js" -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  
    <!-- LOAD BABEL -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
  
    <!-- LOAD JSX FILE -->
    <!-- HERE IS ALL YR JSX -->
    <script src="root.js" type="text/jsx"></script>
  </body>
