import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
//import index from "./index.css"

class Index extends React.Component {
    constructor(props) {
        super()
        this.state = {
            placeholders: ["Поиск по ФИО...", "Выберите сферу деятельности", "Выберите статус", "Выберите статус"]
        }
        //this.state = { cookie_userID: cookie.load("userIdCookie") }
    }
    render() {
        return (
            <div>
                <TopHeader />
                <SearchBar />
                <h1> Это аккаунт пользователя! </h1>
            </div>
        )
    }
}

export default Index;