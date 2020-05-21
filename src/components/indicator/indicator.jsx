import React from 'react'
import componentCSS from "./indicator.css"

export function Indicator(props) {
    const color = props.color;
    if ((color) == "green") {
        return < div className="indicator indicator-green" ></ div>
    }
    else if ((color) == "green") {
        return < div className="indicator indicator-red" ></ div>
    }
}