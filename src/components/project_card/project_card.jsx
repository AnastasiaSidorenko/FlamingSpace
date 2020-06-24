import React from 'react'

import componentCSS from "./project_card.css"
import { Button_Show_Details } from '../button/button_show_details'
//import { Indicator } from '../indicator/indicator'
import { Project_status } from '../status/project_status'

export class Project_Card extends React.Component {
    constructor() {
        super()
        this.state = { bla: "bla" }
    }

    /*<p className="project-card__block-vacancy">Разработчик С++</p>
                                <p className="project-card__block-vacancy">Разработчик Java</p>
                                <p className="project-card__block-vacancy">Менеджер проекта</p>
                                <p className="project-card__block-vacancy">Дизайнер</p>
                                <p className="project-card__block-vacancy">Дизайнер</p>
                                */
    formattedNumber(number) {
        if (number < 9) {
            return `0${number + 1}`
        }
        else {
            return `${number + 1}`
        }
    }

    render() {
        let vacancies = this.props.vacancies.map((elem, index) => (
            <p key={index} className="project-card__block-vacancy">{elem.name}</p>
        ));
        let startDate = new Date(this.props.startDate);
        let startDateFormatted = `${this.formattedNumber(startDate.getDate())}/${this.formattedNumber(startDate.getMonth())}/${startDate.getYear()}`
        let finishDate = this.props.endDate ? new Date(this.props.endDate) : '';
        let finishDateFormatted = finishDate ? `${this.formattedNumber(finishDate.getDate())}/${this.formattedNumber(finishDate.getMonth())}/${finishDate.getYear()}` : '';

        return (
            <div className="project-card">
                <div className="project-card__info">
                    <div className="project-card__block">
                        <div className="project-card__block-title">
                            <span className="project-card__project-name">{this.props.title}</span>
                            <span className="project-card__title-delimiter">/</span>
                            <span className="project-card__project-category">{this.props.category}</span>
                        </div>
                        <p className="project-card__block-text">
                            {this.props.description}
                        </p>
                    </div>
                    <div className="project-card__block">
                        <div className="project-card__block-title project-card__block-title_left-padded">Вакансии</div>
                        <div className="project-card__block-vacancies">
                            {vacancies}
                        </div>
                    </div>
                    <div className="project-card__block">
                        <div className="project-card__block-title project-card__block-title_left-padded">Статус</div>
                        <div className="project-card__block-status">
                            <Project_status status={this.props.status} />
                            <span>{this.props.status}</span>
                        </div>
                    </div>
                    <div className="project-card__block">
                        <div className="project-card__block-title project-card__block-title_left-padded">Важные даты</div>
                        <div className="project-card__block-events">
                            <div className="project-card__event-group">
                                <p className="project-card__event-p project-card__event-title">Начало проекта:</p>
                                <p className="project-card__event-p">{startDateFormatted}</p>
                            </div>
                            <div>
                                <p className="project-card__event-p project-card__event-title">Завершение проекта:</p>
                                <p className="project-card__event-p">{finishDateFormatted}</p>
                            </div>
                            {this.startDate}
                        </div>
                    </div>
                </div>
                <div className="project-card__button">
                    <Button_Show_Details link={this.props.link} />
                </div>
            </div >
        )
    }
}