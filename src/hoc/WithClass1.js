import React from 'react';

const withClass1 = props => (
    <div className={props.classes}>{props.children}</div>
)

/* //another form of hoc
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
} */

export default withClass1;