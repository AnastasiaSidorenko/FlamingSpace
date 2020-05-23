import React from 'react'
import componentCSS from "./button_functional.css"

export function Button_Functional(props) {
    // render() {
    return (
        <a type="button" href={props.link} className="button_functional">{props.text}</a>
    )
    //}
}