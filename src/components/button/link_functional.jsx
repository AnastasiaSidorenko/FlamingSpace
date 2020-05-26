import React from 'react'
import componentCSS from "./button_functional.css"

export function Link_Functional(props) {
    // render() {
    return (
        <a href={props.link} className="button_functional">{props.text}</a>
    )
    //}
}