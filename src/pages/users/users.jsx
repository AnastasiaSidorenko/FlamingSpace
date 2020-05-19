import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";
import { Button_apply_filter } from "../../components/button/button_apply_filter";

class Users extends React.Component {

    render() {
        return (
            <div>
                <TopHeader />
                <div>
                    <Search placeholder="Поиск по ФИО..." />
                    <Search placeholder="Выберите сферу деятельности..." />
                    <Search placeholder="Выберите статус..." />
                    <Search placeholder="Выберите статус..." />
                </div>
                <Button_apply_filter />
                <h1> USERS</h1>
            </div>
        )
    }
}

export default Users;