import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
//import index from "./index.css"

class Account extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "#", title: "Аккаунт", link: "#", title: "nickname" }] }
    }

    render() {
        return (
            <div>
                <TopHeader />
                <BreadCrumbs pages={this.breadcrumbs} />
                <h1> Это аккаунт пользователя! </h1>
            </div>
        )
    }
}

export default Account;