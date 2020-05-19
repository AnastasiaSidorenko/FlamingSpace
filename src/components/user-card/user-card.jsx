import React from 'react'

import img from "./user.png"
import componentCSS from "./user-card.css"

export class TopHeader extends React.Component {
    constructor() {
        super()
        this.state = { bla: "bla" }
    }

    render() {
        return (
            <div className="user-card">
                <p className="user-card__full-name"></p>
                <div className="user-card__status">ищу команду</div>
                <img className="user-card__img" alt="Фото участника" />
                <p className="user-card__nickname">@ivanov</p>
                <hr />
                <p>Разработчик С++</p>
                <p>Разработчик Java</p>
                <p>Менеджер проекта</p>
                <p>Дизайнер</p>
                <a className="user-card__button">Подробнее</a>
            </div >
        )
    }
}