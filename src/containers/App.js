import React , { Component, useState } from 'react';
//import logo from './logo.svg';
import customStyles from './App.css';
import Person from '../components/Persons/Person/Person.js';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass2 from '../hoc/WithClass2';
import AuthContext from '../context/auth-context';

//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
//import Radium ,{StyleRoot} from 'radium';

/* function App() {
  return (
    <div className="App">
      <h1> Hey there!</h1>
      <p>Yo sup?</p>
      <Person/>
    </div>
    

    //React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Hey '))
  );
} */

class App extends Component{

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons:  [
        {id: '1', name:'1', age: 1},
        {id: '2',name:'2', age: 2},
        {id: '3',name:'3', age: 3}
      ],
      show : false,
      cockpit:true,
      changeCounter:0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  /* componentWillMount() {
    console.log('[App.js] componentWillMount');
  } */

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;// if false, prevents the toggle from working
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
    
  }
   

  switchNameHandler = (newName) => {
    console.log('button clicked');
    this.setState( {
      persons:[
        {name:'1', age: 0},
        {name:newName, age: 0},
      {name:'3', age: 0}
      ]
    }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name:'1', age: 0},
        {name: event.target.value, age: 0},
        {name:'3', age: 0}
      ]
    })
  }

  nameChangedHandler2 = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    //alternative
    //const person = Object.assign({},this.state.persons[personIndex]);

    persons[personIndex] = person;

    // this type used when increment is needed as using setState alone in heavy applications is not so efficient
    this.setState((prevState, props) => {
      return {
        persons:persons,
        changeCounter : prevState.changeCounter +1
      }
      
    });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons; 
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; 
    persons.splice(index, 1);
    this.setState({persons:persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.show;
    console.log(doesShow);
    this.setState({
      show: !doesShow
    });
  }

  loginHandler = () => {
    this.setState({authenticated: !this.state.authenticated});
  }

  
  render() {
    console.log('[App.js] render');
    let p = null;
    if(this.state.show)
    {
      p = (
          <Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler2}
          //isAuthenticated={this.state.authenticated} no need to send as context is used
          />
      );
    }

    /* return (
      <div className={customStyles.App}>
        <button onClick={() =>  {
          this.setState({
            cockpit: !this.state.cockpit
          })
        }}>Remove Cockpit</button>


        {this.state.cockpit ? <Cockpit 
        title = {this.props.appTitle}
        showPersons={this.state.show}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonHandler}
        /> : null}
        {p}   
      
      </div>
    ); */

    return (
      <Aux>
        <button onClick={() =>  {
          this.setState({
            cockpit: !this.state.cockpit
          })
        }}>Remove Cockpit</button>

        <AuthContext.Provider 
          value = {{
          authenticated:this.state.authenticated, 
          login:this.loginHandler}}
          >
        {this.state.cockpit ? <Cockpit 
        title = {this.props.appTitle}
        showPersons={this.state.show}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonHandler}
        //login = {this.loginHandler}
        /> : null}
        {p}   
        </AuthContext.Provider> 
      
      </Aux>
    );
  }

}
export default withClass2(App,customStyles.App);


//2nd part
/* const App = props => {

  const [personsState, setPersonState ] = useState({
       persons:  [
         {name:'1', age: 1},
         {name:'2', age: 2},
         {name:'3', age: 3}
       ],
       other: 'other value'
     } 
   );

  const [otherState, setOtherState ] = useState('some other value');

   console.log(personsState, otherState);
 
   const switchNameHandler = () => {
     console.log('button clicked@function not component');
     setPersonState( {
       persons:[
         {name:'1', age: 15},
         {name:'2', age: 16},
         {name:'3', age: 18}
       ],
       other: personsState.other
     }
     )
   }
 
   return (
     <div className="App">
     <h1> Hey there!</h1>
     <p>Yo sup?</p>
     <button onClick={switchNameHandler}>Switch button</button>
     <Person name = {personsState.persons[0].name} age ={personsState.persons[0].age} />
     <Person name = {personsState.persons[1].name} age ={personsState.persons[1].age}> I love coding! </Person>
     <Person name = {personsState.persons[2].name} age ={personsState.persons[2].age} />
   </div>
   )
 
 }
 export default App; */
// end of 2nd part
 
