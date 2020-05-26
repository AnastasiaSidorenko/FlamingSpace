import React from "react";
import { TopHeader } from "../../components/topheader/topheader";

//import TopHeader from "../../topheader/topheader";
import { Button_Functional } from "../../components/button/button_functional";

import pageCSS from "./project_create.css"
import { Page_Title } from "../../components/page_title/page_title";

class Project_Create extends React.Component {
    /* constructor() {
         super()
         this.state = { breadcrumbs: [{ link: "/projects", title: "Проекты" }, { link: "#", title: "Проект тыры ты" }] }
     }*/

    render() {
        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <Page_Title title="Создать проект" />
                    <form className="form">
                        <div className="form__item">
                            <label className="form__item-label">Название</label>
                            <input className="form__item-field"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Категория</label>
                            <input className="form__item-field"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Описание</label>
                            <textarea maxLength="1000" rows="13" cols="100" className="form__item-textarea"></textarea>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Категория</label>
                            <input className="form__item-field"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата начала</label>
                            <input type="text" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата окончания</label>
                            <input type="text" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Project_Create;