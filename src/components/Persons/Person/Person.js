import React, {Component} from 'react';
import customeStyles from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import WithClass2 from '../../../hoc/WithClass2';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');
        /* const style = {
            // to access media queries, wrap div into StyleRoot
            '@media (min-width: 500px)': {
                width: '450px' 
            }
        } */
    
        /* return (
            <div className={customeStyles.Person}>
                <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years young</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value = {this.props.name}/>
            </div>
        ) */

        // using hoc
        /* return (
            <Aux>
            <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years young</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value = {this.props.name}/>
            </Aux>
        ); */

        // using React Fragment
       /*  return (
            <React.Fragment>
            <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years young</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value = {this.props.name}/>
            </React.Fragment>
        ); */

        //using WithClass1
        /* return (
            <WithClass1 classes={customeStyles.Person}>
                <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years young</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value = {this.props.name}/>
            </WithClass1>
        ) */

        return (
            <Aux >
                
                {/* <AuthContext.Consumer>
                    {context =>    
                            context.authenticated ?<p>Authenticated</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer> */}

                
                {this.context.authenticated ?<p>Authenticated</p> : <p>Please log in</p>}

                {/* this.props.isAuth?<p>Authenticated</p> : <p>Please log in</p> */}
                <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years young</p>
                <p>{this.props.children}</p>
                <input type="text" 
                onChange={this.props.changed} 
                value = {this.props.name}
                //ref = {(inputEl) => {this.inputElement = inputEl}}
                ref = {this.inputElementRef}
                />
            </Aux>
        )
    }

};
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass2(Person,customeStyles.Person);