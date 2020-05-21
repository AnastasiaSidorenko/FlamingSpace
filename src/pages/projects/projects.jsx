import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";

import flexDIV from "./flex.css"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { Project_Card } from "../../components/project_card/project_card";
import { Button_Functional } from "../../components/button/button_functional";
//import TopHeader from "../../topheader/topheader";

class Projects extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "№", title: "Проекты" }] }
    }

    render() {
        return (
            <div className="container">
                <TopHeader />
                <BreadCrumbs pages={this.state.breadcrumbs} />
                <Page_Title title="Участники" />
                <div className="flex">
                    <Search placeholder="Поиск по ФИО..." />
                    <Search placeholder="Выберите сферу деятельности..." />
                    <Search placeholder="Выберите статус..." />
                    <Search placeholder="Выберите статус..." />
                </div>
                <div className="flex">
                    <Button_apply_filter />
                </div>
                <Project_Card />
                <Project_Card />
                <Project_Card />
                <Project_Card />
                <Project_Card />
                <Button_Functional text="Показать больше" />
            </div>
        )
    }
}

export default Projects;