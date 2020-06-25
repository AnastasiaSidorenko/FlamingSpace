import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pageCSS from "./account.css"
import default_pic from "./img/default.jpg"
import icon__leader from "./img/icon__leader-id.svg"
import icon__vk from "./img/icon__vk.svg"
import icon__git from "./img/icon__git.png"
import { Indicator } from "../../components/indicator/indicator";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";
import { User_status } from '../../components/status/user_status';

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
            user: user.data,
            user__status: user.data.info[0].status,
            user__photo: user.data.info[0].photo,
            user__nickname: user.data.info[0].nickname,
            user__fullName: `${user.data.info[0].lastname} ${user.data.info[0].firstname}`,
            user__post: user.data.info[0].post,
        }
    }

    //breadcrumbs = [{ link: "#", title: "Аккаунт" }, { link: "#", title: this.state.user__nickname }];
    //<div className="user__value">студент кафедры ИС, 4 курс</div>
    render() {
        let projects = this.state.user.projects.map((project, index) => (
            <div key={index} className="project-slider-content__item">
                <Indicator className="project-slider-content__indicator" color="red" />
                <a className="project-slider-content__project-name" href={`/projects/${project.id}`} key={index} >{project.name}</a>
            </div>));

        let contacts = this.state.user.contacts.map(function (contact, index) {
            if (contact.name == "LeaderID") {
                return <a src="link to account" href={contact.url}> <img src={icon__leader} className="contact__icon" key={index} /></a>
            }
            if (contact.name == "Vkontakte") {
                return <a src="link to account" href={contact.url}> <img src={icon__vk} className="contact__icon" key={index} /></a>
            }
            if (contact.name == "GitHub") {
                return <a src="link to account" href={contact.url}> <img src={icon__git} className="contact__icon" key={index} /></a>
            }
        });

        let skills = this.state.user.competences.map((elem, index) => (
            <span key={index} className="user-card__skill">{elem.name} - {elem.level}; </span>
        ));

        let breadcrumbs = [{ link: "#", title: "Аккаунт" }, { link: "#", title: this.state.user__nickname }];

        let Slider = () => {
            if (this.state.whichComponentToShow == "Information") {
                return (
                    <div>
                        <div className="user__params_values">
                            <p className="user__param">Статус:</p>
                            <div className="user__value">
                                <User_status status={this.state.user__status} />
                                {this.state.user__status ? this.state.user__status : "не определен"}
                            </div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Должность:</p>
                            <div className="user__value">{this.state.user__post}</div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Контакты:</p>
                            <div>
                                {contacts}
                            </div>
                        </div>
                        <div className="user__params_values">
                            <p className="user__param">Компетенции:</p>
                            <div className="user__value">
                                {skills}
                            </div>
                        </div>
                    </div >
                );
            }
            else {
                return (
                    <div className="project-slider-content">
                        {projects}
                    </div>
                );
            }
        }

        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={breadcrumbs} />
                    <Page_Title title={this.state.user__fullName} className="user__name" />
                    <div className="user">
                        <div className="user__name-img">
                            <div className="user__img-container"><img className="user__img" alt="Изображение пользователя"
                                src={(this.state.user__photo) ? this.state.user__photo : default_pic} /></div>
                            <p className="user__nickname">
                                @{this.state.user__nickname}
                            </p>
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