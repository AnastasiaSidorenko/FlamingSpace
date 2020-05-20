import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
//import index from "./index.css"

class Account extends React.Component {
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

export default Account;