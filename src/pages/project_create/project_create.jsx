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
                            <input type="text" name="input" placeholder="YYYY-MM-DD" required
                                pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
                                title="Enter a date in this format YYYY-MM-DD" />
                            <input type="date" className="form__item-field"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата окончания</label>
                            <input type="date" className="form__item-field"></input>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Project_Create;