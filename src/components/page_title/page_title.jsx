import React from 'react'
import componentCSS from "./page_title.css"

export function Page_Title(props) {
    return (
        <h1 className="title">{props.title}</h1>
    )
}