import React from 'react';

function Button({type, className, clickHandler, children}) {
    return (
        <button
            type={type}
            onClick={clickHandler}
            className={className}>
            {children}
        </button>
    );
}

export default Button;