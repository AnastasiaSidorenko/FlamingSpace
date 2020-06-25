import React from 'react'

import componentCSS from "./event_card.css"
import { Button_Show_Details } from '../button/button_show_details'
import default_pic from "./img/default.jpg"
//import img from "./img.png"

export class Event_Card extends React.Component {
    constructor(props) {
        super(props)
    }

    formattedNumber(number) {
        if (number < 9) {
            return `0${number + 1}`
        }
        else {
            return `${number + 1}`
        }
    }

    render() {
        let date = new Date(this.props.date);
        let dateFormatted = `${this.formattedNumber(date.getDate())}.${this.formattedNumber(date.getMonth())}.${date.getYear()}`

        return (
            < div className="event-card" >
                <p className="event-card__title" title={this.props.title}>{this.props.title}</p>
                <div className="event-card__img-container">
                    <img className="event-card__img" alt="Изображение мероприятия" src={this.props.img ? this.props.img : default_pic} />
                </div>
                <div className="event-card__info">
                    <span className="event-card__date">{dateFormatted}</span>
                    <Button_Show_Details link={`https://leader-id.ru/event/${this.props.id}`} />
                </div>
            </div >
        )
    }
}