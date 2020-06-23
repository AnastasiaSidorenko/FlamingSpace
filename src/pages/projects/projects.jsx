import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";

import pageCSS from "./projects.css"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { Project_Card } from "../../components/project_card/project_card";
import { Button_Functional } from "../../components/button/button_functional";
import { Page_Title } from "../../components/page_title/page_title";
import { Link_Functional } from "../../components/button/link_functional";

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
            projects: initialProjects.data,
            page: 0,
            filter: "",
            error: ""
        }
        console.log(this.state.projects);
    }

    breadcrumbs = [{ link: "#", title: "Проекты" }];

    static requestInitialData() {
        return fetch("https://api.flamingspace.sevsu.ru/projects/0/5")
            //return fetch("https://api.randomuser.me/?results=5")
            .then(response => response.json())

    };

    fetchProjects = () => {
        this.setState({ loading: true, error: "" });
        //let response = await fetch(`https://api.flamingspace.sevsu.ru/projects/${this.state.page + 1}/20`, { mode: 'no-cors' });
        fetch(`https://api.flamingspace.sevsu.ru/projects/${this.state.page + 1}/5`)
            //fetch("https://api.randomuser.me/?results=2")
            //.then(response => response.json())
            //response
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, page: (this.state.page + 1), users: [...this.state.projects, ...data.data], error: "" });
                console.log("this.state.projects", this.state.projects)
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false, error: "Не удалось загрузить данные" })
                //this.setState({ ...this.state, loading: false });
            });
    }

    fetchFilteredProjects = (filter) => {
        this.setState({ users: [], loading: true, page: 0, filter: filter });
        //fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page + 1}/20`)
        // let _url = "http://localhost:3012/users/0/20" + filter;
        let _url = fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page}/5` + filter);
        fetch(_url)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, page: (this.state.page + 1), users: [...data], error: '' });
                console.log("this.state.filtered-projects", this.state.data)
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false, error: "Не удалось загрузить данные" })
                /*if (e == "Failed to fetch") {
                    console.log(e);
                    this.setState({ loading: false, error: "Не удалось загрузить данные" })
                }*/
            });
    }

    render() {
        let projects = this.state.projects.map((project, index) => (
            <Project_Card key={index} link={`/projects/${project.id}`} title={project.name} category={project.category}
                description={project.description} status={project.status} startDate={project.projectstart} finishDate={project.projectend}
                vacancies={project.vacancies} />
        ));
        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />

                    <div className="project__heading">
                        <div>
                            <Page_Title title="Проекты" />
                        </div>
                        <hr className="project__strip" />
                        <Link_Functional text="Создать проект" link="projects/create" />
                    </div>

                    <Search_Bar />
                    {projects}

                    <div className="flex__centered">
                        <span className="capture">{this.state.loading ? 'Загрузка...' : ''}</span>
                        <span className="capture">{this.state.error ? this.state.error : ''}</span>
                        <div>{(this.state.loading) ? '' : <Button_Functional text="Показать больше" onClick={this.fetchProjects} />}</div>
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