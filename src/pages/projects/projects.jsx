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
            initialProjects = JSON.parse(window.__initialData__);
            console.log("window data", initialProjects)
            delete window.__initialData__;
        }
        this.state = {
            loading: false,
            projects: initialProjects.results,
            page: 0,
            filter: "",
            error: false
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

    fetchFilteredProjects = (filter) => {
        this.setState({ users: [], loading: true, page: 0, filter: filter });
        //fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page + 1}/20`)
        let _url = "http://localhost:3012/users/0/20" + filter;
        fetch(_url)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, users: [...data.results] });
                console.log("this.state.filtered-users", this.state.users)
            })
            .catch(e => {
                if (e == "Failed to fetch")
                    console.log(e);
                this.setState({ loading: false, error: "Не удалось загрузить данные" })
            });
    }

    render() {
        let projects = this.state.projects.map((project, index) => (
            <Project_Card key={index} link="/projects/1234" title={`${project.name.first}  ${project.name.last}`}
                img={project.picture.large} startDate={project.dob.date} finishDate={project.dob.date}
                vacancies={[project.location.country, project.location.country, project.location.country, project.location.country, project.location.country]} />
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
                    <Search_Bar />
                    {projects}

                    <div className="flex__centered">
                        <p className="capture">{this.state.loading ? 'Загрузка...' : ''}</p>
                        <p className="capture">{this.state.error ? this.state.error : ''}</p>
                        {(this.state.loading && !this.state.error) ? '' : <Button_Functional text="Показать больше" onClick={this.fetchProjects} />}
                    </div>
                </div>
            </div>
        )
    }
}

class Search_Bar extends React.Component {
    state = {
        title: "",
        category: "",
        vacancy: "",
        status: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
    }

    getFilter = () => {
        if (!this.state.title && !this.state.category && !this.state.vacancy && !this.state.status) {
            return;
        }
        let filter;
        if (this.state.title) {
            filter = `?title=${this.state.title}` + (this.state.category ? `&category=${this.state.category}` : "") +
                (this.state.vacancy ? `&vacancy=${this.state.vacancy}` : "") + (this.state.status ? `&status=${this.state.status}` : "")
            return this.props.getFilteredData(filter);
        }
        if (this.state.category) {
            filter = `?category=${this.state.category}` + (this.state.vacancy ? `&vacancy=${this.state.vacancy}` : "") +
                (this.state.status ? `&status=${this.state.status}` : "")
            return this.props.getFilteredData(filter);
        }
        if (this.state.vacancy) {
            filter = `?vacancy=${this.state.vacancy}` + (this.state.status ? `&status=${this.state.status}` : "")
            return this.props.getFilteredData(filter);
        }
        if (this.state.status) {
            filter = `?status=${this.state.status}`
            return this.props.getFilteredData(filter);
        }
    }

    render() {
        return (
            <div>
                <div className="flex__space-between">
                    <Search name="title" onChange={event => { this.handleChange(event, "fio") }} placeholder="Поиск по названию..." />
                    <Search name="category" placeholder="Выберите категорию..." />
                    <Search name="vacancy" onChange={event => { this.handleChange(event, "status") }} placeholder="Выберите вакансию..." />
                    <Search name="status" placeholder="Выберите статус..." />
                </div>
                <Button_apply_filter onClick={this.getFilter} />
            </div >
        )
    }
}

export default Projects;