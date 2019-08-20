import React,  {useEffect, useRef} from 'react';
import customStyles from './Cockpit.css';

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  //toggleBtnRef.current.click();
  // here it's  called before rendering :: therefore error

  useEffect(() => {
    // for every render
    console.log('[Cockpit.js] useEffect');
    // http request
    // componentDidMount and componentDidUpdate in one go

    /* const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 3000) */
    toggleBtnRef.current.click();

    return () => {
      //clearTimeout(timer);
      console.log('[Cockpit.js] clean up work in useEffect')
    }
  }, []); //or [props.persons] && [] means useEffect will work only when it's mounted for first time and unmounted

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect')
    }
  }); // calling on every update cycle

  // as many useEffects as we want

    const classes = [];
    let btnClass = '';

    if(props.showPersons)
    {
        btnClass = customStyles.Red;
    }
    if( props.personsLength<=2)
    {
      classes.push(customStyles.red); // classes = ['red']
    }
    if( props.personsLength<=1)
    {
      classes.push(customStyles.bold) // classes = ['red', 'bold']
    }

    return ( 
    <div className={customStyles.Cockpit}>
        <h1> Hey there! from {props.title}</h1>
        <p className={classes.join(' ')}>Yo sup?</p>
        <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Switch button</button>
    </div>
    );
};

export default React.memo(Cockpit);