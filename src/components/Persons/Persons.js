import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return (
      this.props.persons.map((per,index) => 
      <Person // key always given to higher heirarchical component 
      key = {per.id}
      changed = {(event) => this.props.changed(event,per.id)}
      click = {() => this.props.clicked(index)}
      name={per.name} 
      age={per.age}/> //</ErrorBoundary>
      )
    );
  }
  
}
    

export default Persons;