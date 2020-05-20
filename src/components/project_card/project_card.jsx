import React from 'react'

import componentCSS from "./project_card.css"
import { Button_show_more } from '../button/button_show_more'

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
                            Повседневная практика показывает, что сплочённость команды профессионалов требует
                            определения и уточнения системы массового участия! Мы вынуждены отталкиваться от того,
                            что сложившаяся структура организации, а также свежий взгляд на привычные вещи -
                            безусловно открывает новые горизонты для поэтапного и последовательного развития общества.
                            Следует отметить, что базовый вектор развития однозначно определяет каждого участника как
                            способного принимать собственные решения касаемо прогресса профессионального сообщества.
                        </p>
                    </div>

                </div>
                <Button_show_more />
            </div >
        )
    }
}