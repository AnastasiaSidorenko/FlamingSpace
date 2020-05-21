import React from 'react'
import componentCSS from "./breadcrumbs.css"

export function BreadCrumbs(props) {
    return (
        <ul className="breadcrumbs">
            <li className="breadcrumb" key="-1"><a href="/" className="breadcrumb__a">Главная</a></li>
            {props.pages.map((page, index) => (
                <li className="breadcrumb" key={index}><a href={page.link} className="breadcrumb__a">{page.title}</a></li>
            ))}
        </ul >
    )
}