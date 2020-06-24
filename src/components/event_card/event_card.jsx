import React from 'react'

import componentCSS from "./event_card.css"
import { Button_Show_Details } from '../button/button_show_details'
//import img from "./img.png"

export function Event_Card(props) {
    let date = new Date(props.date);
    let dateFormatted = `${this.formattedNumber(startDate.getDate())}/${this.formattedNumber(startDate.getMonth())}/${startDate.getYear()}`

    return (
        <div className="event-card">
            <p className="event-card__title" title={props.title}>{props.title}</p>
            <div className="event-card__img-container">
                <img className="event-card__img" alt="Изображение мероприятия" src={props.img} />
            </div>
            <div className="event-card__info">
                <span className="event-card__date">{dateFormatted}</span>
                <Button_Show_Details link={props.link} />
            </div>
        </div >
    )
}