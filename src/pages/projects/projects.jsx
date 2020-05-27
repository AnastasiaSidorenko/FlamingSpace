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
    constructor(props) {
        super(props);
        let initialProjects
        if (props.initialData) {
            initialProjects = props.initialData;
            console.log("props data", initialProjects)
        }
        else {
            initialUsers = JSON.parse(window.__initialData__);
            console.log("window data", initialProjects)
            delete window.__initialData__;
        }
        this.state = {
            loading: false,
            users: initialProjects.results,
            page: 0
        }
    }

    breadcrumbs = [{ link: "№", title: "Проекты" }];

    static requestInitialData() {
        // return fetch("https://api.flamingspace.sevsu.ru/projects/0/20")
        return fetch("https://api.randomuser.me/?results=5")
            .then(response => response.json())

    };

    fetchProjects = () => {
        this.setState({ loading: true });
        //fetch(`https://api.flamingspace.sevsu.ru/projects/${this.state.page + 1}/20`)
        fetch("https://api.randomuser.me/?results=2")
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, page: (this.state.page + 1), users: [...this.state.projects, ...data.results] });
                console.log("this.state.projects", this.state.projects)
            })
            .catch(e => {
                console.log(e);
                //this.setState({ ...this.state, loading: false });
            });
    }

    render() {
        let projects = this.state.projects.map((project, index) => (
            <Project_Card key={index} link="/projects/1234" title={`${project.name.first}  ${project.name.last}`}
                img={project.picture.large} startDate={project.dob.date} finishDate={project.dob.date}
                vacancies={[user.location.country, user.location.country, user.location.country, user.location.country, user.location.country]} />
        ));

        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <div className="flex__space-between">
                        <Page_Title title="Проекты" />
                        <Button_Functional text="Подать заявку" link="create" />
                    </div>
                    <div className="flex__space-between">
                        <Search placeholder="Поиск по ФИО..." />
                        <Search placeholder="Выберите сферу деятельности..." />
                        <Search placeholder="Выберите статус..." />
                        <Search placeholder="Выберите статус..." />
                    </div>
                    <div className="flex">
                        <Button_apply_filter />
                    </div>
                    {projects}
                    <Project_Card link="/projects/1234" />
                    <div className="flex__centered">
                        <p className="capture__loading-users">{this.state.loading ? 'Загрузка...' : ''}</p>
                        {this.state.loading ? '' : <Button_Functional text="Показать больше" onClick={this.fetchProjects} />}
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects;