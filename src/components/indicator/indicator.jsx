import React from 'react'
import componentCSS from "./indicator.css"

export function Indicator(props) {
    const color = props.color;
    if ((color) == "green") {
        return < div className="indicator indicator-green" ></ div>
    }
    if ((color) == "red") {
        return < div className="indicator indicator-red" ></ div>
    }
    if ((color) == "yellow") {
        return < div className="indicator indicator-yellow" ></ div>
    }
    if ((color) == "grey") {
        return < div className="indicator indicator-grey" ></ div>
    }
}
}