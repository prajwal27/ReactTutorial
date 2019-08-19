import React from 'react';
import customStyles from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if(props.show)
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
        <h1> Hey there!</h1>
        <p className={classes.join(' ')}>Yo sup?</p>
        <button
        className={btnClass}
        //style={style}
        onClick={ () => this.togglePersonHandler() }>Switch button</button>
        {/*p*/}
    </div>
    );
};

export default cockpit;