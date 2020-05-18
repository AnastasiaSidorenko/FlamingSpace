import React from 'react'
//import isBrowser from 'is-in-browser';
// import { search } from 'node-emoji'

export class TopHeader extends React.Component {
    render() {
        return (
            <div className="topheader">
                <img
                    className="topheader__logo"
                    alt="Площадка проектов лого"
                    src="/img/logo.jpg"
                />
                <a className="topheader__link" href='/'>Главная</a>
                <a className="topheader__link" href='/users'>Участники</a>
                <a className="topheader__link" href='/projects'>Проекты</a>
                <a className="topheader__link" href='/mobileapp'>Мобильное приложение</a>
                <a className="topheader__link" href='/about'>О сервисе</a>
                <a className="topheader__link" href='/help'>Помощь</a>
                <a className="topheader__auth-button" href='/https://github.com/login/oauth/authorize?client_id=031140a5c46d6e46b49e5a7c2c35c3c2'>Авторизация</a>
            </div >
        )
    }
}

//export default TopHeader