import React, {Component} from 'react';
import customeStyles from './Person.css';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        const style = {
            // to access media queries, wrap div into StyleRoot
            '@media (min-width: 500px)': {
                width: '450px' 
            }
        }
    
        return (
            <div className={customeStyles.Person}>
                <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years young</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value = {this.props.name}/>
            </div>
        )
    }
 
};

export default Person;