import React from 'react'
import componentCSS from "./breadcrumbs.css"

export function BreadCrumbs(props) {
    return (
        <ul className="breadcrumbs">
            <li><a href="/" className="breadcrumb">Главная</a></li>
            {props.pages.map(page => (
                <li a href={page.link} className="breadcrumb">{page.title}</li>
            ))}
            }
        </ul >
    )
}