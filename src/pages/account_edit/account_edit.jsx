import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account_edit.css"
import { Button_Functional } from "../../components/button/button_functional";
//import { Select_List } from "../../components/select_list/select_list";

import Select from 'react-select';

class Account_Edit extends React.Component {
    state = {
        skills: [{ skill: "JS разработчик", level: "2" }],
        status: null
    };

    handleChangeStatus = status => {
        this.setState(
            { status },
            () => console.log(`Option selected:`, this.state.status)
        );
    };

    handleChange = (event, index, type) => {
        /*this.setState({ [name]: event.target.value })
        console.log(this.state)*/
        const skills = this.state.skills;
        let value = event.target.value;
        skills[index][type] = value;
        this.setState({ skills: skills });
        console.log(this.state)
    }

    addSkill = () => {
        this.setState({ skills: [...this.state.skills, { skill: null, level: null }] })
    }

    SubmitChanges() {
        //sent results to API
    }

    render() {
        //const { selectedOption } = this.state;

        let skills = this.state.skills.map((item, index) => (
            <div className="skill-group">
                <select key={index} className="select-list__skill" value={item.skill} onChange={event => this.handleChange(event, index, "skill")}>
                    <option className="option" value="" disabled selected>Выберете компетенцию</option>
                    <option className="option" value="C++ разработчик">C++ разработчик</option>
                    <option className="option" value="JS разработчик">JS разработчик</option>
                </select>
                <select key={0 - index} className="select-list__level" value={item.level} onChange={event => this.handleChange(event, index, "level")} >
                    <option className="option" value="" disabled selected>Уровень</option>
                    <option className="option" value="1">Начальный</option>
                    <option className="option" value="2">Средний</option>
                    <option className="option" value="3">Высокий</option>
                </select>
            </div>
        ));

        return (
            <div>
                <TopHeader />
                <div className="container">
                    <div className="flex__2-columns">
                        <div className="sections-titles">
                            <p className="main-section__title">Основная информация</p>
                            <hr className="section-titles__delimiter" />
                            <p className="contact-section__title">Контакты</p>
                            <hr className="section-titles__delimiter" />
                            <p className="skills-section__title">Компетенции</p>
                        </div>
                        <form onSubmit={this.SubmitChanges} ref="form" className="form">
                            <div className="main-section section-content">
                                <div className="form__item">
                                    <label className="main-section__item-label form__item-label">Nickname</label>
                                    <input className="main-section__item-field form__item-field" maxLength="30"></input>
                                </div>
                                <div className="form__item">
                                    <label className="main-section__item-label form__item-label">Статус</label>

                                </div>
                                <div className="form__item">
                                    <label className="main-section__item-label form__item-label">Должность</label>
                                    <input className="main-section__item-field form__item-field" maxLength="30"></input>
                                </div>
                            </div>

                            <div className="contact-section section-content">
                                <div className="form__item">
                                    <label className="form__item-label contact-section__item-label">VK :</label>
                                    <input className="contact-section__item-field form__item-field" maxLength="50"></input>
                                </div>
                                <div className="form__item">
                                    <label className="form__item-label contact-section__item-label">Git :</label>
                                    <input className="contact-section__item-field form__item-field" maxLength="50"></input>
                                </div>
                            </div>

                            <div className="skills-section section-content">
                                {skills}
                                <p onClick={this.addSkill} className="skills-section__add-competency-button" >Добавить компетенцию</p>
                            </div>
                            <div className="submit-container">
                                <Button_Functional type="submit" text="Сохранить изменения" />
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}

export default Account_Edit;