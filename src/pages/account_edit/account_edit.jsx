import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account_edit.css"
import { Button_Functional } from "../../components/button/button_functional";
//import { Select_List } from "../../components/select_list/select_list";

import Select from 'react-select';

class Account_Edit extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        const { selectedOption } = this.state;

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
                        <form onSubmit="{this.add}" ref="form" className="form">
                            <div className="main-section section-content">
                                <div className="form__item">
                                    <label className="main-section__item-label form__item-label">Nickname</label>
                                    <input className="main-section__item-field form__item-field"></input>
                                </div>
                                <div className="form__item">
                                    <label className="main-section__item-label form__item-label">Статус</label>
                                    <Select className="select-list__status" value={selectedOption} onChange={this.handleChange}
                                        options={[{ value: 'ищу команду', label: 'ищу команду' }, { value: 'занят', label: 'занят' }]}
                                        placeholder="Статус" />
                                </div>
                                <div className="form__item">
                                    <label className="main-section__item-label form__item-label">Должность</label>
                                    <input className="main-section__item-field form__item-field"></input>
                                </div>
                            </div>

                            <div className="contact-section section-content">
                                <div className="form__item">
                                    <label className="contact-section__item-label form__item-label">VK</label>
                                    <input className="contact-section__item-field form__item-field"></input>
                                </div>
                                <div className="form__item">
                                    <label className="contact-section__item-label form__item-label">GIT</label>
                                    <input className="contact-section__item-field form__item-field"></input>
                                </div>
                            </div>

                            <div className="skills-section section-content">
                                <div>
                                </div>
                                <p className="skills-section__add-competency-button" >Добавить компетенцию</p>
                            </div>
                            <Button_Functional type="submit" text="Сохранить изменения" />
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}

export default Account_Edit;