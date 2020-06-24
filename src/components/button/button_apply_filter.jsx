import React from 'react'
import componentCSS from "./button_functional.css"
import horizontal_strips from "./horizontal_strips.css"

export function Button_apply_filter(props) {
    // render() {
    return (
        <div className="horizontal_strips">
            <hr className="strip" />
            <button className="button_functional button_functional_filter" onClick={props.onClick}>Применить фильтр</button>
            <hr className="strip" />
        </div>
    )
    //}
}