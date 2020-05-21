import React from 'react'

import componentCSS from "./event_card.css"
import { Button_Show_Details } from '../button/button_show_details'
import img from "./img.png"

export function Event_Card(props) {
    return (
        <div className="event-card">
            <p className="event-card__title">{props.title}</p>
            <div className="event-card__img-container">
                <img className="event-card__img" alt="Изображение мероприятия" src={img} />
            </div>
            <div className="event-card__info">
                <span className="date">02.02.2020</span>
                <Button_Show_Details link={props.link} />
            </div>
        </div >
    )
}