import React from 'react'
import componentCSS from "./button_functional.css"

export function Button_Functional(props) {
    // render() {
    return (
        <button type="button" className="button_functional">{props.text}</button>
    )
    //}
}