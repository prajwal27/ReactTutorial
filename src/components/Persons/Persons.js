import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    props.persons.map((per,index) => 
        <Person // key always given to higher heirarchical component 
        key = {per.id}
        changed = {(event) => props.changed(event,per.id)}
        click = {() => props.clicked(index)}
        name={per.name} 
        age={per.age}/> //</ErrorBoundary>
      );

export default persons;