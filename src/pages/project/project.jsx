import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Event_Card } from "../../components/event_card/event_card";
import { Page_Title } from "../../components/page_title/page_title";
import { Indicator } from "../../components/indicator/indicator";
import { Button_Functional } from "../../components/button/button_functional";
import Select from 'react-select';
import cookie from 'react-cookies'
import default_pic from "./img/default.jpg"

import componentCSS from "./joinRequestCard.css"
import pageCSS from "./project.css"

class Project extends React.Component {
    constructor(props) {
        super(props);
        let project
        if (props.initialData) {
            project = props.initialData;
            console.log("props data", project)
        }
        else {
            project = JSON.parse(window.__initialData__);
            console.log("window data", project)
            delete window.__initialData__;
        }
        this.state = {
            project: project.data,
            project__info: project.data.info[0],
            cookie_userID: cookie.load("userIdCookie"),
            isUserParticipant: false,
            isJoinRequestCardOpened: false
        }
    }

    isUserParticipant = () => {
        let userID = this.state.cookie_userID;
        let isMember = false;
        if (userID) {
            this.state.project.participants.forEach((elem) => {
                if (elem.id == userID) {
                    isMember = true;
                }
            });
            return isMember;
        }
        else {
            return false;
        }
    };

    /*isUserParticipant = (participantID) => {
        console.log("isUserParticipant", participantID);
        console.log("userID", this.state.cookie_userID);
        if (participantID != this.state.cookie_userID) {
            return false;
        }
        else {
            this.setState({ isUserParticipant: true });
            return true;
        }
    }*/

    sendLeaveRequest = () => {//Check if user logged in!!!!!!!!
        console.log("leaveRequestButton clicked")
    }

    closeJoinRequestCard = () => {
        this.setState({ isJoinRequestCardOpened: false })
    }

    showJoinRequestCard = () => {
        if (this.state.cookie_userID) {
            if (this.state.isJoinRequestCardOpened === false) { //Check if user logged in!!!!!!!! if (this.state.cookie_userID)
                this.setState({ isJoinRequestCardOpened: true })
            }
        }
        else {
            window.location.replace("http://localhost:3000/auth");
        }
    }

    JoinLeaveButton = () => {
        if (this.state.project__info.status != "завершен") {
            let isUserMember = this.isUserParticipant();
            console.log("isUserMember", isUserMember)
            if (!isUserMember) {
                if (this.state.project.vacancies.length) {
                    return <Button_Functional text="Подать заявку" onClick={this.showJoinRequestCard} />
                }
                else {
                    return '';
                }
            }
            else {
                return <Button_Functional text="Покинуть проект" onClick={this.sendLeaveRequest} />
            }
            /*if (!this.state.isUserParticipant) {
                return <Button_Functional text="Подать заявку" onClick={this.showJoinRequestCard} />
            }
            else {
                return <Button_Functional text="Покинуть проект" onClick={this.sendLeaveRequest} />
            }*/
        }
        else {
            return '';
        }
    }

    render() {

        let breadcrumbs = [{ link: "/projects", title: "Проекты" }, { link: "#", title: this.state.project__info.name }];

        let vacancies = this.state.project.vacancies.map((elem, index) => (
            <div className="main-info__recruitment_item" key={index}>
                <Indicator color="red" /><span>{elem.name}</span>
            </div>
        ));

        let participants = this.state.project.participants.map((elem, index) => {
            return (
                <div className="member-card" key={index} >
                    <div className="member-card__img-container">
                        <img className="member-card__img" src={(elem.photo) ? elem.photo : default_pic} />
                    </div>
                    <div>
                        <p className="member-card__name">{elem.lastname} {elem.firstname}</p>
                        <hr className="member-card__name-position-delimiter" />
                        {elem.jobs.map((elem, index) => (
                            <p key={index} className="member-card__position">{elem.name}</p>
                        ))}
                    </div>
                </div >
            )
        });

        let Events = () => {
            if (this.state.project.events.length) {
                return this.state.project.events.map((elem, index) => (
                    <Event_Card key={index} className="events__event" date={elem.date} img={(elem.photo)} title={elem.name} id={elem.id} />
                ));
            }
            else {
                return <p>Ближайших мероприятий не найдено</p>
            }
        }

        /* let JoinLeaveButton = () => {
             if (this.state.project__info.status != "завершен" && this.state.project.vacancies.length) {
                 let result = this.isUserParticipant();
                 if (result) {
                     return <Button_Functional text="Подать заявку" onClick={this.showJoinRequestCard} />
                 }
                 /*if (!this.state.isUserParticipant) {
                     return <Button_Functional text="Подать заявку" onClick={this.showJoinRequestCard} />
                 }
                 else {
                     return <Button_Functional text="Покинуть проект" onClick={this.sendLeaveRequest} />
                 }
        }
        
            else {
        return '';
        }
        }*/

        let JoinRequestWindow = this.state.isJoinRequestCardOpened ?
            <JoinRequestCard onClose={this.closeJoinRequestCard} userID={this.state.cookie_userID}
                vacancies={this.state.project.vacancies} projectID={this.state.project__info.id} />
            : '';

        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <BreadCrumbs pages={breadcrumbs} />
                    {JoinRequestWindow}
                    <div className="project__heading">
                        <div className="project__title-group">
                            <Page_Title title={this.state.project__info.name} className="project__title" />
                            <p className="project__category">Категория: {this.state.project__info.category}</p>
                        </div>
                        <hr className="project__strip" />
                        <this.JoinLeaveButton />
                    </div>

                    <div className="flex__2-columns">
                        <div className="info">
                            <div className="main-info">
                                <div className="main-info__description">
                                    <h3 className="main-info__block-title">Описание проекта</h3>
                                    <p>{this.state.project__info.description}</p>
                                </div>
                                <div className="main-info__recruitment">
                                    <h3 className="main-info__block-title">Кто требуется:</h3>
                                    <div>
                                        {vacancies}
                                    </div>
                                </div>
                            </div>

                            <div className="events">
                                <p className="events__title">Мероприятия проектной группы</p>
                                <div className="events__items">
                                    <Events />
                                </div>
                            </div>

                        </div>

                        <div className="members">
                            <h3 className="subtitle">Участники</h3>
                            {participants}
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

class JoinRequestCard extends React.Component {
    state = {
        vacancy: "",
        message: "",
        error: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
        console.log(`State:`, this.state);
    }

    handleChangeVacancy = vacancy => {
        this.setState(
            { vacancy },
            () => console.log(`Option selected:`, this.state.vacancy)
        );
    };

    handleSubmit = () => {
        let data;

        if (this.state.vacancy !== '') {
            this.setState({ error: "" });
            if (this.state.message == "") {
                data = {
                    date: new Date()
                };
            }
            else {
                data = {
                    date: new Date(),
                    message: this.state.message
                };
            }

            console.log("forming fetch", data);
            console.log("json data", JSON.stringify(data));

            fetch(`https://api.flamingspace.sevsu.ru/projects/edit/${this.props.projectID}/vacancies/${this.state.vacancy.value}/${this.props.userID}/`, {
                method: 'POST',
                headers: {
                    // 'Access': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .then(response => {
                    console.log(response);
                    if (!response.error_code) {
                        //this.props
                        this.setState({ error: "Заявка отправлена" })
                        //this.props.onClose();
                    }
                    else {
                        this.setState({ error: "Заявку уже была отправлена" })
                    }
                })
                .catch(error => this.setState({ error: "Не удалось отправить заявку" }));

        }
        else {
            this.setState({ error: "Необходимо выбрать вакансию" })
        }
    }

    render() {
        let vacancies = this.props.vacancies.map((item, index) => (
            { value: item.id, label: item.name }
            //{ value: "5", label: item.name }
        ))
        console.log(vacancies);

        return (
            <div className="joinRequestCard" >
                <span className="joinRequestCard__close" onClick={this.props.onClose}></span>
                <div className="form" >
                    <div className="form__item">
                        <label className="form__item-label">Вакансия</label>
                        <Select className="select-list" value={this.state.vacancy} onChange={this.handleChangeVacancy}
                            options={vacancies} placeholder="Выберете вакансию" />
                    </div>
                    <div className="form__item">
                        <label className="form__item-label">Сообщение</label>
                        <textarea onChange={event => { this.handleChange(event, "message") }}
                            className="description" maxLength="300" rows="8" cols="60" className="form__item-textarea"></textarea>
                    </div>
                </div>
                <div className="submit-container">
                    <Button_Functional text="Отправить заявку" onClick={this.handleSubmit} />
                    <p className="error_message">{this.state.error}</p>
                </div>
            </div >
        );
    }
}

export default Project;