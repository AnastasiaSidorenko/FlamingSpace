import React from 'react'

import img from "./user.png"
import componentCSS from "./user_card.css"
import { Button_Show_Details } from '../button/button_show_details'
import { Indicator } from '../indicator/indicator'

export class User_Card extends React.Component {
    constructor() {
        super()
        this.state = { bla: "bla" }
    }

    render() {
        return (
            <div className="user-card">
                <p className="user-card__full-name">Иван Иванов</p>
                <div className="user-card__status"><Indicator color="green" />
                    <span>ищу команду</span></div>
                <div className="user-card__img-container">
                    <img className="user-card__img" alt="Фото участника" src={img} />
                </div>
                <span className="user-card__nickname">@ivanov</span>
                <hr className="user-card__hr" />
                <p className="user-card__skill">Разработчик С++</p>
                <p className="user-card__skill">Разработчик Java</p>
                <p className="user-card__skill">Менеджер проекта</p>
                <p className="user-card__skill">Дизайнер</p>
                <Button_Show_Details link="#" />
            </div >
        )
    }
}