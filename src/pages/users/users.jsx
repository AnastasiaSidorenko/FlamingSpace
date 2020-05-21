import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { User_Card } from "../../components/user_card/user_card";
import fpageCSS from "./users.css"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";

class Users extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "#", title: "Участники" }] }
    }

    render() {
        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.state.breadcrumbs} />
                    <Page_Title title="Участники" />
                    <div className="flex__space-between">
                        <Search placeholder="Поиск по ФИО..." />
                        <Search placeholder="Выберите сферу деятельности..." />
                        <Search placeholder="Выберите статус..." />
                        <Search placeholder="Выберите статус..." />
                    </div>
                    <Button_apply_filter />
                    <div className="grid">
                        <User_Card /><User_Card /><User_Card /><User_Card /><User_Card />
                        <User_Card /><User_Card /><User_Card /><User_Card /><User_Card />
                    </div>
                </div >
            </div>
        )
    }
}

export default Users;