import React from 'react';
import "./button.css"

function Button({type, className, clickHandler, children, name}) {
    return (
        <button
            type={type}
            onClick={clickHandler}
            className={className}
            name={name}>
            {children}
        </button>
    );
}

export default Button;