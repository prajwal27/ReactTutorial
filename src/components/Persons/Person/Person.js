import React from 'react';
import customeStyles from './Person.css';


const person = (props) => {
    const style = {
        // to access media queries, wrap div into StyleRoot
        '@media (min-width: 500px)': {
            width: '450px' 
        }
    }

    return (
        <div className={customeStyles.Person}>
            <p onClick={props.click}> I'm {props.name} and I'm {props.age} years young</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    )
    
    
};

export default person;