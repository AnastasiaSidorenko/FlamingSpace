import React from 'react'

//import img from "./user.png"
import componentCSS from "./user_card.css"
import { Button_Show_Details } from '../button/button_show_details'
import { Indicator } from '../indicator/indicator'

export class User_Card extends React.Component {
    constructor() {
        super()
        this.state = { bla: "bla" }
    }

    /*<p className="user-card__skill">Разработчик С++</p>
                    <p className="user-card__skill">Разработчик Java</p>
                    <p className="user-card__skill">Менеджер проекта</p>
                    <p className="user-card__skill">Дизайнер</p> */

    render() {
        let skills = this.props.skills.map((elem, index) => (
            <p key={index} className="user-card__skill">{elem.name}</p>
        ));
        return (
            <div className="user-card">
                <p className="user-card__full-name">{this.props.FLname}</p>
                <div className="user-card__status"><Indicator color="green" />
                    <span>{this.props.status}</span></div>
                <div className="user-card__img-container">
                    <img className="user-card__img" alt="Фото участника" src={this.props.img} />
                </div>
                <span className="user-card__nickname">@{this.props.nickname}</span>
                <hr className="user-card__hr" />
                <div className="user-card__skills">
                    {skills}
                </div>
                <Button_Show_Details link={`/account/${this.props.id}`} />
            </div >
        )
    }
}