import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";

import pageCSS from "./projects.css"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { Project_Card } from "../../components/project_card/project_card";
import { Button_Functional } from "../../components/button/button_functional";
import { Page_Title } from "../../components/page_title/page_title";
//import TopHeader from "../../topheader/topheader";

class Projects extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "№", title: "Проекты" }] }
    }

    render() {
        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.state.breadcrumbs} />
                    <Page_Title title="Проекты" />
                    <div className="flex__space-between">
                        <Search placeholder="Поиск по ФИО..." />
                        <Search placeholder="Выберите сферу деятельности..." />
                        <Search placeholder="Выберите статус..." />
                        <Search placeholder="Выберите статус..." />
                    </div>
                    <div className="flex">
                        <Button_apply_filter />
                    </div>
                    <Project_Card link="/projects/1234" />
                    <Project_Card link="/projects/1234" />
                    <Project_Card link="/projects/1234" />
                    <Project_Card link="/projects/1234" />
                    <Project_Card link="/projects/1234" />
                    <div className="flex__centered">
                        <Button_Functional text="Показать больше" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;