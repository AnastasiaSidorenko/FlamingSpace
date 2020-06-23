import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account.css"
import user from "./img/user.png"
import icon__leader from "./img/icon__leader-id.svg"
import icon__vk from "./img/icon__vk.svg"
import { Indicator } from "../../components/indicator/indicator";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";

class User extends React.Component {
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
            whichComponentToShow: "Information",
            data: initialProjects.data,
        }
    }

    breadcrumbs = [{ link: "#", title: "Аккаунт" }, { link: "#", title: "nickname" }];

    render() {
        let Slider = () => {
            if (this.state.whichComponentToShow == "Information") {
                return (
                    <div>
                        <div className="user__params_values">
                            <p className="user__param">Статус:</p>
                            <div className="user__value"><Indicator color="green" />ищу команду</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Должность:</p>
                            <div className="user__value">студент кафедры ИС, 4 курс</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Контакты:</p>
                            <div>
                                <a src="link to account"><img src={icon__leader} className="contact__icon" /></a>
                                <a src="link to account"><img src={icon__vk} className="contact__icon" /></a>
                            </div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Компетенции:</p>
                            <div className="user__value"><span>UI/UX разработка - 1, Javascript разработка - 2</span></div>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="project-slider-content">
                        {this.state.data.projects.map((project, index) => (
                            <div className="project-slider-content__item">
                                <Indicator className="project-slider-content__indicator" color="red" />
                                <a className="project-slider-content__project-name" href={`/projects/${project.id}`}>{project.name}</a>
                            </div>))}

                        let projects = this.state.projects.map((project, index) => (
                        <Project_Card key={index} link={`/projects/${project.id}`} title={project.name} category={project.category}
                            description={project.description} status={project.status} startDate={project.projectstart} finishDate={project.projectend}
                            vacancies={project.vacancies} />
        ));

                        <div className="project-slider-content__item">
                            <Indicator className="project-slider-content__indicator" color="red" />
                            <span className="project-slider-content__project-name">Название проекта</span>
                        </div>
                        <div className="project-slider-content__item">
                            <Indicator className="project-slider-content__indicator" color="red" />
                            <span className="project-slider-content__project-name">Название проекта</span>
                        </div>
                        <div className="project-slider-content__item">
                            <Indicator className="project-slider-content__indicator" color="red" />
                            <span className="project-slider-content__project-name">Название проекта</span>
                        </div>
                        <div className="project-slider-content__item">
                            <Indicator className="project-slider-content__indicator" color="red" />
                            <span className="project-slider-content__project-name">Название проекта</span>
                        </div>
                    </div>
                );
            }
        }


        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <div className="user">
                        <div className="user__name-img">
                            <Page_Title title="Елисеев Юлий" className="user__name" />
                            <div className="user__img-container"><img className="user__img" alt="Изображение пользователя" src={this.state.data.info.photo} /></div>
                            <p className="user__nickname">@{this.state.data.info.nickname}</p>
                        </div>

                        <div className="slider">
                            <div className="slider__titles">
                                <div className={this.state.whichComponentToShow == "Information" ? "slider__title-active" : "slider__title-passive"}
                                    onClick={() => this.setState({ whichComponentToShow: "Information" })}>
                                    <p className="slider__title-elem">Информация</p>
                                </div>
                                <div className={this.state.whichComponentToShow == "Projects" ? "slider__title-active" : "slider__title-passive"}
                                    onClick={() => this.setState({ whichComponentToShow: "Projects" })}>
                                    <p className="slider__title-elem">Проекты</p>
                                </div>
                            </div>
                            <Slider />
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default User;