import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account.css"
import user from "./user.png"
import img from "./img.png"
import icon__leader from "./icon__leader-id.svg"
import icon__vk from "./icon__vk.svg"
import { Indicator } from "../../components/indicator/indicator";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";
import { Event_Card } from "../../components/event_card/event_card";

class Account extends React.Component {
    constructor() {
        super()
        this.state = {
            whichComponentToShow: "Information"
        }
    }

    breadcrumbs = [{ link: "#", title: "Аккаунт" }, { link: "#", title: "nickname" }];

    render() {
        let Slider = () => {
            if (this.state.whichComponentToShow == "Information") {
                return (
                    <div>
                        <div className="user__params_values">
                            <p className="user__param">Статус:</p>
                            <div className="user__value"><Indicator color="green" />ищу команду</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Должность:</p>
                            <div className="user__value">студент кафедры ИС, 4 курс</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Контакты:</p>
                            <div>
                                <a src="link to account"><img src={icon__leader} className="contact__icon" /></a>
                                <a src="link to account"><img src={icon__vk} className="contact__icon" /></a>
                            </div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Компетенции:</p>
                            <div className="user__value"><span>UI/UX разработка - 1, Javascript разработка - 2</span></div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="project-slider-content">
                        <div className="project-slider-content__item">
                            <Indicator className="project-slider-content__indicator" color="red" />
                            <span className="project-slider-content__project-name">Название проекта</span>
                        </div>
                        <div className="project-slider-content__item">
                            <Indicator className="project-slider-content__indicator" color="red" />
                            <span className="project-slider-content__project-name">Название проекта</span>
                        </div>
                    </div>
                );
            }
        }

        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <div className="user">
                        <div className="user__name-img">
                            <Page_Title title="Елисеев Юлий" className="user__name" />
                            <div className="user__img-container"><img className="user__img" alt="Изображение пользователя" src={user} /></div>
                            <p className="user__nickname">@eliseev</p>
                            <a className="user__edit-profile-button" href="edit">Редактировать профиль</a>
                        </div>

                        <div className="slider">
                            <div className="slider__titles">
                                <div className={this.state.whichComponentToShow == "Information" ? "slider__title-active" : "slider__title-passive"}
                                    onClick={() => this.setState({ whichComponentToShow: "Information" })}>
                                    <p className="slider__title-elem">Информация</p>
                                </div>
                                <div className={this.state.whichComponentToShow == "Projects" ? "slider__title-active" : "slider__title-passive"}
                                    onClick={() => this.setState({ whichComponentToShow: "Projects" })}>
                                    <p className="slider__title-elem">Проекты</p>
                                </div>
                            </div>
                            <Slider />
                        </div>
                    </div>

                    <div className="events">
                        <p className="events__title">Мероприятия проектной группы</p>
                        <div className="events__items">
                            <Event_Card className="events__event" img={img} link="#" title="Lorem ipsum dolor sit amet, an ius stet duis, ut utamur indoctum definitionem quo. Cum ei tantas maiestatis" />
                            <Event_Card className="events__event" img={img} link="#" title="Lorem ipsum dolor sit amet, an ius stet duis, ut utamur indoctum definitionem quo. Cum ei tantas maiestatis" />
                            <Event_Card className="events__event" img={img} link="#" title="Lorem ipsum dolor sit amet, an ius stet duis, ut utamur indoctum definitionem quo. Cum ei tantas maiestatis" />
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default Account;