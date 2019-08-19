import React from 'react';
import customStyles from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if(props.showPersons)
    {
        btnClass = customStyles.Red;
    }
    if( props.persons.length<=2)
    {
      classes.push(customStyles.red); // classes = ['red']
    }
    if( props.persons.length<=1)
    {
      classes.push(customStyles.bold) // classes = ['red', 'bold']
    }

    return ( 
    <div className={customStyles.Cockpit}>
        <h1> Hey there! from {props.title}</h1>
        <p className={classes.join(' ')}>Yo sup?</p>
        <button
        className={btnClass}
        onClick={props.clicked}>Switch button</button>
    </div>
    );
};

export default cockpit;