import React from 'react'
import componentCSS from "./select_list.css"

export function Select_List(props) {
    if (props.selected_earlier != "") {
        return (
            <select className="select_list" name={props.name}>
                <option disabled key="-1"> {props.title}</option>
                {props.options.map(function (option__item, index) {
                    {
                        if (option__item != selected_earlier) {
                            <option value={option__item} key={index}>{option__item}</option>
                        }
                        else {
                            <option value={option__item} key={index} selected>{option__item}</option>
                        }
                    }
                }
                )}
            </select >
        )
    }
    else {
        return (
            <select className="select_list" name={props.name}>
                <option disabled selected key="-1">{props.title}</option>
                console.log(props.options);
                {props.options.map((element, index) => (
                    <option value={element} key={index}>{element}</option> //To think what value shold be
                ))}
            </select >
        )
    }
}