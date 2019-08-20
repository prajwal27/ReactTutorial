import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  // if checking for all props ---- use PureComponent
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons) // works because values being copied into new storage in app.js not just tweaked old ones
    {
      return true; 
    }
    return false;
  } //paint flashing to see realDOM and reactDOM difference

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message:'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // clean up work
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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