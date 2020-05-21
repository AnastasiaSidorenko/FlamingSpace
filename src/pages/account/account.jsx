import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account.css"
import img from "./user.png"
import { Indicator } from "../../components/indicator/indicator";

class Account extends React.Component {
    constructor() {
        super()
        this.state = {
            breadcrumbs: [{ link: "#", title: "Аккаунт", link: "#", title: "nickname" }],
            whichComponentToShow: "Information"
        }
    }
    render() {
        const slider = this.state.whichComponentToShow == "Info"
            ?
            (
                <div>
                    <div className="user__param_value">
                        <p className="user__param">Статус:</p>
                        <div className="user__value"><Indicator color="green" />ищу команду</div>
                    </div>
                    <div className="user__param_value">
                        <p className="user__param">Должность:</p>
                        <div className="user__value">студент кафедры ИС, 4 курс</div>
                    </div>
                    <div className="user__param_value">
                        <p className="user__param">Контакты:</p>
                        <div className="user__value"></div>
                    </div>
                    <div className="user__param_value">
                        <p className="user__param">Компетенции:</p>
                        <div className="user__value">UI/UX разработка - 1, Javascript разработка - 2</div>
                    </div>
                </div>
            )
            :
            (
                <div>
                    <div><Indicator color="red" /> Какой-то проект</div>
                    <div><Indicator color="red" /> Какой-то проект</div>
                </div>
            );

        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <div className="user">
                        <div>
                            <Page_Title title="Елисеев Юлий" className="user__name" />
                            <div className="user__img-container">
                                <img className="user__img" alt="Изображение пользователя" src={img} />
                            </div>
                            <p className="user__nickname">@eliseev</p>
                        </div>

                        <div className="slider">
                            <div className="slider__titles">
                                <div className={this.state.whichComponentToShow == "info" ? "slider__title-active" : ""}
                                    onClick={() => this.setState({ whichComponentToShow: "Information" })}>
                                    <h4 className="slider__title-elem">Информация</h4>
                                </div>
                                <div className={this.state.whichComponentToShow == "Projects" ? "slider__title-active" : ""}
                                    onClick={() => this.setState({ whichComponentToShow: "Projects" })}>
                                    <h4 className="slider__title-elem">Проекты</h4>
                                </div>
                            </div>
                            <slider />
                        </div>

                    </div>

                    <div className="events flex">
                        <p className="events__title">Мои мероприятия</p>
                        <div className="events__items">
                            <Event_Card title="Окрестности Тулы оросил боевой клич героев" link="#" />
                            <Event_Card title="Частокол на границе развеял последние сомнения" link="#" />
                            <Event_Card />
                        </div>
                    </div>
                    <h1> Это аккаунт пользователя! </h1>
                </div >
            </div>
        )
    }
}

export default Account;