import React from 'react';

/* const withClass = props => (
    <div className={props.classes}>{props.children}</div>
) */

//another form of hoc
const withClass2 = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/> 
        </div>
        // important to pass props from withClass2 to lower 
    )
}

export default withClass2;