import React from "react";
import { TopHeader } from "../../components/topheader/topheader";

//import TopHeader from "../../topheader/topheader";
import { Button_Functional } from "../../components/button/button_functional";

import pageCSS from "./project_create.css"
import { Page_Title } from "../../components/page_title/page_title";

import Select from 'react-select';

class Project_Create extends React.Component {
    /* constructor() {
         super()
         this.state = { breadcrumbs: [{ link: "/projects", title: "Проекты" }, { link: "#", title: "Проект тыры ты" }] }
     }*/
    state = {
        category: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
    }

    handleChangeStatus = category => {
        this.setState(
            { category },
            () => console.log(`Option selected:`, this.state.category)
        );
    };

    /*<select className="select-list" value={this.state.category} onChange={event => this.handleChange(event, "category")}>
                                <option className="option" value="" disabled selected>Выберете категорию</option>
                                <option className="option" value="IT">IT</option>
                                <option className="option" value="Ordinary">Ordinary</option>
                            </select>*/

    render() {
        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <Page_Title title="Создать проект" />
                    <hr />
                    <form className="form">
                        <div className="form__item">
                            <label className="form__item-label">Название</label>
                            <input className="form__item-field" maxLength="30"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Категория</label>
                            <Select className="select-list" value={this.state.category} onChange={this.handleChangeCategory}
                                options={[{ value: 'IT', label: 'IT' }, { value: 'Ordinary', label: 'Ordinary' }]}
                                placeholder="Выберете категорию" />
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Описание</label>
                            <textarea maxLength="1000" rows="13" cols="120" className="form__item-textarea"></textarea>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата начала</label>
                            <input type="text" className="form__item-field form__item-field_date" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата окончания</label>
                            <input type="text" className="form__item-field form__item-field_date" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                        <div className="submit-container">
                            <Button_Functional type="submit" text="Создать проект" />
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Project_Create;