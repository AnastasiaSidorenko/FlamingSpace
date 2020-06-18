import React from 'react'
//import isBrowser from 'is-in-browser';
// import { search } from 'node-emoji'
import cookie from 'react-cookies'
import logo from "./logo.jpg"
import componentCSS from "./topheader.css"

export class TopHeader extends React.Component {
    constructor(props) {
        super(props)
        let section = props.section;
        this.state = {
            cookie_userID: cookie.load("userIdCookie"),
            currentSection: section
        }
    }

    render() {
        console.log(this.state.cookie_userID)
        return (
            <div className="topheader">
                <img className="topheader__logo" alt="Площадка проектов лого" src={logo} />
                <a className={this.state.currentSection == "Главная"
                    ? "topheader__link topheader__current-section" : "topheader__link"} href='/'>Главная</a>
                <a className={this.state.currentSection == "Участники"
                    ? "topheader__link topheader__current-section" : "topheader__link"} href='/users'>Участники</a>
                <a className={this.state.currentSection == "Проекты"
                    ? "topheader__link topheader__current-section" : "topheader__link"} href='/projects'>Проекты</a>
                <a className={this.state.currentSection == "Мобильное приложение"
                    ? "topheader__link topheader__current-section" : "topheader__link"} href='/mobileapp'>Мобильное приложение</a>
                <a className={this.state.currentSection == "О сервисе"
                    ? "topheader__link topheader__current-section" : "topheader__link"} href='/about'>О сервисе</a>
                <a className={this.state.currentSection == "Помощь"
                    ? "topheader__link topheader__current-section" : "topheader__link"} href='/help' > Помощь</a>
                {
                    this.state.cookie_userID ?
                        < div className="topheader__loggedInDiv" >
                            <a className="topheader__link topheader__item" href={"/account/" + this.state.cookie_userID} >
                                <div className="topheader__user-preview topheader__item"></div>
                            </a>
                            <a className="topheader__auth-button topheader__item" href='/auth/logout'>Выйти</a>
                        </ div>
                        :
                        <a className="topheader__auth-button" href='/auth'>Авторизация</a>
                }
            </div >
        )
    }
}

//export default TopHeader