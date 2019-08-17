import React , { Component, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import Radium ,{StyleRoot} from 'radium';

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

  state = {
    persons:  [
      {id: '1', name:'1', age: 1},
      {id: '2',name:'2', age: 2},
      {id: '3',name:'3', age: 3}
    ],
    show : false
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
    

    this.setState({
      persons:persons
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

  
  render() {
    // inline styling
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer',
      /* ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      } */
    };
    //console.log("render" + this.state.show)
    let p = null;

    if(this.state.show)
    {//console.log("render2" + this.state.show)
      p = (
        <div>
          {this.state.persons.map((per,index) => {
            return <Person 
            key = {per.id}
            changed = {(event) => this.nameChangedHandler2(event,per.id)}
            click = {() => this.deletePersonHandler(index)}
            name={per.name} 
            age={per.age}/>
          })}
        {/* <Person 
        name = {this.state.persons[0].name} 
        age ={this.state.persons[0].age} />

        <Person 
        name = {this.state.persons[1].name}
        age ={this.state.persons[1].age} 
        click = {this.switchNameHandler.bind(this,'Prajwal')}
        changed = {this.nameChangedHandler}> I love coding! </Person>

        <Person
        name = {this.state.persons[2].name}
        age ={this.state.persons[2].age} /> */}
      </div>
      );

      style.backgroundColor = 'red';
      /* style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }; */
    }

    //let classes = ['red','bold'].join(' ');
    const classes = [];
    if( this.state.persons.length<=2)
    {
      classes.push('red'); // classes = ['red']
    }
    if( this.state.persons.length<=1)
    {
      classes.push('bold') // classes = ['red', 'bold']
    }
    return (
      
      <div className={"App"}>
      <h1> Hey there!</h1>
      <p className={classes.join(' ')}>Yo sup?</p>
      <button
      style={style}
      onClick={ () => this.togglePersonHandler() }>Switch button</button>
      {p}
      
      {
        /* this.state.show ?
      <div>
        <Person 
        name = {this.state.persons[0].name} 
        age ={this.state.persons[0].age}
         //changed = {this.nameChangedHandler} 
        />
        <Person 
        name = {this.state.persons[1].name}
        age ={this.state.persons[1].age} 
        click = {this.switchNameHandler.bind(this,'Prajwal')}
        changed = {this.nameChangedHandler}> I love coding! </Person>

        <Person
        name = {this.state.persons[2].name}
        age ={this.state.persons[2].age}
        //changed = {this.nameChangedHandler} 
        />
      </div> : null */}
      

      
    </div>
    
    )
  }

}
export default App;


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
 
