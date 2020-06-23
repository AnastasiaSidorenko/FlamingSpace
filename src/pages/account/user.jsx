import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account.css"
import user from "./img/user.png"
import icon__leader from "./img/icon__leader-id.svg"
import icon__vk from "./img/icon__vk.svg"
import icon__git from "./img/icon__git.svg"
import { Indicator } from "../../components/indicator/indicator";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";

class User extends React.Component {
    constructor(props) {
        super(props);
        let user
        if (props.initialData) {
            user = props.initialData;
            console.log("props data", user)
        }
        else {
            user = JSON.parse(window.__initialData__);
            console.log("window data", user)
            delete window.__initialData__;
        }
        this.state = {
            whichComponentToShow: "Information",
            data: user.data,
        }
    }

    breadcrumbs = [{ link: "#", title: "Аккаунт" }, { link: "#", title: "nickname" }];
    //<div className="user__value">студент кафедры ИС, 4 курс</div>
    render() {
        let Slider = () => {
            if (this.state.whichComponentToShow == "Information") {
                return (
                    <div>
                        <div className="user__params_values">
                            <p className="user__param">Статус:</p>
                            <div className="user__value"><Indicator color={(this.props.status == "ищу команду") ? "green" : (this.props.status == "в работе") ? "red" : "grey"} />{this.state.info.status}</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Должность:</p>
                            <div className="user__value">{this.state.post}</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Контакты:</p>
                            <div>
                                {this.state.data.contacts.map(function (contact, index) {
                                    if (contact.name == "LeaderID") {
                                        return <a src="link to account" href={contact.url}> <img src={icon__leader} className="contact__icon" /></a>
                                    }
                                    if (contact.name == "Vkontakte") {
                                        return <a src="link to account" href={contact.url}> <img src={icon__vk} className="contact__icon" /></a>
                                    }
                                    if (contact.name == "GitHub") {
                                        return <a src="link to account" href={contact.url}> <img src={icon__git} className="contact__icon" /></a>
                                    }
                                })}
                            </div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Компетенции:</p>
                            <div className="user__value">
                                {this.state.data.competences.map((elem, index) => (
                                    <span key={index} className="user-card__skill">{elem.name} - {elem.level}; </span>
                                ))}
                            </div>
                        </div>
                    </div >
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

/*class Slider extends React.Component {
    render() {

        let Content = () => {
            if (props.whichComponentToShow == "Information") {
                return (
                    <div>
                        <div className="user__params_values">
                            <p className="user__param">Статус:</p>
                            <div className="user__value"><Indicator color="green" />{this.state.status}</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Должность:</p>
                            <div className="user__value">студент кафедры ИС, 4 курс</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Контакты:</p>
                            <div>
                                {this.state.data.contacts.map((contact, index) => (
                                    (contact.name == "LeaderID") ? <a src="link to account" > <img src={icon__leader} className="contact__icon" href={contact.url} /></a> :
                                        (contact.name == "Vkontakte") ? <a src="link to account" > <img src={icon__vk} className="contact__icon" href={contact.url} /></a> : ''
                                ))}
                            </div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Компетенции:</p>
                            <div className="user__value">
                                {this.state.data.competences.map((elem, index) => (
                                    <span key={index} className="user-card__skill">{elem.name} - {elem.level}</span>
                                ))}
                            </div>
                        </div>
                    </div >
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
                    </div>
                );
            }
        }
        return (
            { Content }
        )
    }
}*/


export default User;