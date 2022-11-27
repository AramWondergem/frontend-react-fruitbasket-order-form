import React from 'react';
import "./inputTextOrNumber.css"

function InputTextOrNumber({label, type, name, onChange, value}) {
    return (
        <label className="normalInput" htmlFor={name}>{label}:
            <input onChange={onChange} name={name} type={type} id={name} value={value}/>
        </label>
    );
}

export default InputTextOrNumber;