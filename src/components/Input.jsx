import React from "react";
import './app.css'

const Input =(props) => {
    return (
        <input className="reg-input flex-fill shadow-sm" style={{fontFamily: 'Arial, FontAwesome', 
        fontSize: '16px',
        borderColor: 'transprent'}} onChange={
            (event) => {
                props.setValue(event.target.value)
            } 
        }  value={props.value} type={props.type} placeholder={props.placeholder} />
    )
}

export default Input