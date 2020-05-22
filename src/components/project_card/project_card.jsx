import React from 'react'

import componentCSS from "./project_card.css"
import { Button_Show_Details } from '../button/button_show_details'
import { Indicator } from '../indicator/indicator'

export class Project_Card extends React.Component {
    constructor() {
        super()
        this.state = { bla: "bla" }
    }

    render() {
        return (
            <div className="project-card">
                <div className="project-card__info">
                    <div className="project-card__block">
                        <div className="project-card__block-title">
                            <span className="project-card__project-name">Название проекта</span>
                            <span className="project-card__title-delimiter">/</span>
                            <span className="project-card__project-category">Категория</span>
                        </div>
                        <p className="project-card__block-text">
                            Повседневная практика показывает, что сплочённость команды профессионалов требует определения и уточнения системы массового участия! Мы вынуждены отталкиваться от того, что сложившаяся структура организации, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поэтапного и последовательного развития общества. Следует отметить, что базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо прогресса профессионального сообщества. ффффффффф фффффффффффф фффффффффффффффф фффффффффффффффф фффффффффффффффф фффффффффффффффф фффффф фффффффффф
                        </p>
                    </div>
                    <div className="project-card__block">
                        <div className="project-card__block-title project-card__block-title_left-padded">Вакансии</div>
                        <div className="project-card__block-vacancies">
                            <p className="project-card__block-vacancy">Разработчик С++</p>
                            <p className="project-card__block-vacancy">Разработчик Java</p>
                            <p className="project-card__block-vacancy">Менеджер проекта</p>
                            <p className="project-card__block-vacancy">Дизайнер</p>
                            <p className="project-card__block-vacancy">Дизайнер</p>
                            <p className="project-card__block-vacancy">Дизайнер</p>
                        </div>
                    </div>
                    <div className="project-card__block">
                        <div className="project-card__block-title project-card__block-title_left-padded">Статус</div>
                        <div className="project-card__block-status">
                            <Indicator color="red" className="project-card__status-indicator" />
                            <span>набор команды</span>
                        </div>
                    </div>
                    <div className="project-card__block">
                        <div className="project-card__block-title project-card__block-title_left-padded">Важные даты</div>
                        <div className="project-card__block-events">
                            <div className="project-card__event-group">
                                <p className="project-card__event-p project-card__event-title">Начало проекта:</p>
                                <p className="project-card__event-p">01/01/2020</p>
                            </div>
                            <div>
                                <p className="project-card__event-p project-card__event-title">Завершение проекта:</p>
                                <p className="project-card__event-p">01/06/2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex__centered">
                    <Button_Show_Details link="/projects/1234" className="project-card__button" />
                </div>
            </div >
        )
    }
}