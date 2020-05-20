import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { User_Card } from "../../components/user_card/user_card";
import flexDIV from "./flex.css"

class Users extends React.Component {
    render() {
        return (
            <div className="container">
                <TopHeader />
                <div className="flex">
                    <Search placeholder="Поиск по ФИО..." />
                    <Search placeholder="Выберите сферу деятельности..." />
                    <Search placeholder="Выберите статус..." />
                    <Search placeholder="Выберите статус..." />
                </div>
                <div className="flex">
                    <Button_apply_filter />
                </div>
                <div className="flex">
                    <User_Card /><User_Card /><User_Card /><User_Card />
                </div>
                <h1> USERS</h1>
            </div>
        )
    }
}

export default Users;