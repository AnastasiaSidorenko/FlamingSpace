import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Event_Card } from "../../components/event_card/event_card";
import { Page_Title } from "../../components/page_title/page_title";
import { Indicator } from "../../components/indicator/indicator";
//import TopHeader from "../../topheader/topheader";
import img from "./img.png"
import member from "./member.png"
import { Button_Functional } from "../../components/button/button_functional";

import pageCSS from "./project.css"

class Project extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "/projects", title: "Проекты" }, { link: "#", title: "Проект тыры ты" }] }
    }

    render() {
        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <BreadCrumbs pages={this.state.breadcrumbs} />
                    <div className="project__heading">
                        <div>
                            <Page_Title title="Проект такой-то" className="project__title" />
                            <p className="project__category">Категория: Информационные системы</p>
                        </div>
                        <hr className="project__strip" />
                        <Button_Functional text="Подать заявку" link="#" />
                    </div>

                    <div className="flex__2-columns">
                        <div className="info">
                            <div className="main-info">
                                <div className="main-info__description">
                                    <h3 className="main-info__block-title">Описание проекта</h3>
                                    <p>Диаграммы связей, инициированные исключительно синтетически, превращены
                                    в посмешище, хотя само их существование приносит несомненную пользу обществу.
                                    Предварительные выводы неутешительны: высокое качество позиционных исследований
                                    однозначно фиксирует необходимость дальнейших направлений развития. Лишь
                                    предприниматели в сети интернет, инициированные исключительно синтетически,
                                    преданы социально-демократической анафеме. Сложно сказать, почему независимые
                             государства могут быть призваны к ответу.</p>
                                </div>
                                <div className="main-info__recruitment">
                                    <h3 className="main-info__block-title">Кто требуется:</h3>
                                    <div>
                                        <div className="main-info__recruitment_item"><Indicator color="red" /><span>UI/UX разработчик</span></div>
                                        <div className="main-info__recruitment_item"><Indicator color="red" /><span>Backend разработчик</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="events">
                                <p className="events__title">Мероприятия проектной группы</p>
                                <div className="events__items">
                                    <Event_Card className="events__event" img={img} title="Окрестности Тулы оросил боевой клич героев" link="#" />
                                    <Event_Card className="events__event" img={img} title="Частокол на границе развеял последние сомнения" link="#" />
                                    <Event_Card className="events__event" title="Частокол на границе развеял последние сомнения ааааааааа аааааа ааааа ааааааа ааааа " link="#" />
                                </div>
                            </div>

                        </div>

                        <div className="members">
                            <h3 className="subtitle">Участники</h3>

                            <div className="member-card">
                                <div className="member-card__img-container">
                                    <img className="member-card__img" src={img} />
                                </div>
                                <div>
                                    <p className="member-card__name" title="fullNAME">Котовский Роман</p>
                                    <hr className="member-card__name-position-delimiter" />
                                    <p className="member-card__position" title="fullPOSITION">UI/UX разработчик</p>
                                </div>
                            </div>

                            <div className="member-card">
                                <div className="member-card__img-container">
                                    <img className="member-card__img" src={img} />
                                </div>
                                <div>
                                    <p className="member-card__name">Котовский Роман</p>
                                    <hr className="member-card__name-position-delimiter" />
                                    <p className="member-card__position">UI/UX разработчик</p>
                                </div>
                            </div>

                            <div className="member-card">
                                <div className="member-card__img-container">
                                    <img className="member-card__img" src={img} />
                                </div>
                                <div>
                                    <p className="member-card__name">Котовский Роман</p>
                                    <hr className="member-card__name-position-delimiter" />
                                    <p className="member-card__position">UI/UX разработчик</p>
                                </div>
                            </div>

                            <div className="member-card">
                                <div className="member-card__img-container">
                                    <img className="member-card__img" src={img} />
                                </div>
                                <div>
                                    <p className="member-card__name">Котовский Роман</p>
                                    <hr className="member-card__name-position-delimiter" />
                                    <p className="member-card__position">UI/UX разработчик</p>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

export default Project;