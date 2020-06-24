import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Event_Card } from "../../components/event_card/event_card";
import { Page_Title } from "../../components/page_title/page_title";
import { Indicator } from "../../components/indicator/indicator";
import default_pic from "./img/default.jpg"
import default_event_pic from "./img/img.png"
import { Link_Functional } from "../../components/button/link_functional";

import pageCSS from "./project.css"

class Project extends React.Component {
    constructor(props) {
        super(props);
        let project
        if (props.initialData) {
            project = props.initialData;
            console.log("props data", project)
        }
        else {
            project = JSON.parse(window.__initialData__);
            console.log("window data", project)
            delete window.__initialData__;
        }
        this.state = {
            project: project.data,
            project__info: project.data.info[0]
        }
    }

    render() {

        let breadcrumbs = [{ link: "/projects", title: "Проекты" }, { link: "#", title: this.state.project__info.name }];

        let vacancies = this.state.project.vacancies.map((elem, index) => (
            <div className="main-info__recruitment_item" key={index}>
                <Indicator color="red" /><span>{elem.name}</span>
            </div>
        ));

        let participants = this.state.project.participants.map((elem, index) => (
            <div className="member-card" key={index}>
                <div className="member-card__img-container">
                    <img className="member-card__img" src={(elem.photo) ? elem.photo : default_pic} />
                </div>
                <div>
                    <p className="member-card__name">{elem.lastname} {elem.firstname}</p>
                    <hr className="member-card__name-position-delimiter" />
                    <p className="member-card__position">{elem.jobs[0].name}</p>
                </div>
            </div>
        ));

        let events = this.state.project.events.map((elem, index) => (
            <Event_Card className="events__event" img={(elem.photo) ? elem.photo : default_event_pic} title={elem.name} link="#" />
        ));

        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <BreadCrumbs pages={breadcrumbs} />
                    <div className="project__heading">
                        <div>
                            <Page_Title title={this.state.project__info.name} className="project__title" />
                            <p className="project__category">Категория: {this.state.project__info.category}</p>
                        </div>
                        <hr className="project__strip" />
                        <Link_Functional text="Подать заявку" link="#" />
                    </div>

                    <div className="flex__2-columns">
                        <div className="info">
                            <div className="main-info">
                                <div className="main-info__description">
                                    <h3 className="main-info__block-title">Описание проекта</h3>
                                    <p>{this.state.project__info.description}</p>
                                </div>
                                <div className="main-info__recruitment">
                                    <h3 className="main-info__block-title">Кто требуется:</h3>
                                    <div>
                                        {vacancies}
                                    </div>
                                </div>
                            </div>

                            <div className="events">
                                <p className="events__title">Мероприятия проектной группы</p>
                                <div className="events__items">
                                    {events}
                                </div>
                            </div>

                        </div>

                        <div className="members">
                            <h3 className="subtitle">Участники</h3>
                            {participants}
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

export default Project;