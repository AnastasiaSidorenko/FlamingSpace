import React from 'react'
import componentCSS from "./button_functional.css"

export function Button_Functional(props) {
    // render() {
    return (
        <button className="button_functional" onClick={props.onClick}>{props.text}</button>
    )
    //}
}