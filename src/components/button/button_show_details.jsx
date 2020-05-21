import React from 'react'
import componentCSS from "./button_show_more.css"

export function Button_Show_Details(props) {
    // render() {
    return (
        <a className="button_show_more" href={props.link}>Подробнее</a>
    )
}