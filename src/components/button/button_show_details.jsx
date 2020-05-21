import React from 'react'
import componentCSS from "./button_show_details.css"

export function Button_Show_Details(props) {
    // render() {
    return (
        <a className="button_show_details" href={props.link}>Подробнее</a>
    )
}