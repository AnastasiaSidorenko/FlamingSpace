import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { User_Card } from "../../components/user_card/user_card";
import fpageCSS from "./users.css"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";
import { Button_Functional } from "../../components/button/button_functional";

import "core-js/stable";
import "regenerator-runtime/runtime";

class Users extends React.Component {
    constructor(props) {
        super(props);
        let initialUsers
        if (props.initialData) {
            initialUsers = props.initialData.results;
            console.log("props data", props.initialData.results)
        }
        else {
            initialUsers = window.__initialData__.results;
            console.log("window data", window.__initialData__)
            delete window.__initialData__;
        }
        this.state = {
            loading: false,
            users: initialUsers
        }
    }

    breadcrumbs = [{ link: "#", title: "Участники" }];


    static requestInitialData() {
        return fetch("https://api.randomuser.me/?results=2")
            .then(response => response.json())
            .catch(error => console.log(error));
    };

    alert() {
        console.log("AAAAAAA")
    };

    /*fetchUsers() {
        this.setState({ loading: true });
        fetch("https://api.randomuser.me/?results=2")
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false, users: [...this.state.users, ...data.results] });
                console.log(this.state.users)
            })
            .catch(e => {
                console.log(e);
                //this.setState({ ...this.state, loading: false });
            });
    }*/
    render() {
        console.log("in render", this.state.users);
        let users = this.state.users.map((user, index) => (
            <User_Card key={index} FLname={`${user.name.first}  ${user.name.last}`} img={user.picture.large}
                nickname={user.location.country} />
        ));

        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <Page_Title title="Участники" />
                    <div className="flex__space-between">
                        <Search placeholder="Поиск по ФИО..." />
                        <Search placeholder="Выберите сферу деятельности..." />
                        <Search placeholder="Выберите статус..." />
                        <Search placeholder="Выберите статус..." />
                    </div>
                    <Button_apply_filter />
                    <div className="grid">
                        {this.state.users.map((user, index) => (
                            <User_Card key={index} FLname={`${user.name.first}  ${user.name.last}`} img={user.picture.large}
                                nickname={user.location.country} />
                        ))}
                    </div>
                    <div className="flex__centered">
                        <p>{this.state.loading ? 'Fetching users...' : ''}</p>
                        {this.state.loading ? '' : <Button_Functional text="Показать больше" onClick={this.alert} />}
                        {this.state.loading ? '' : <button onClick={() => { this.alert }}>Показать больше</button>}
                        <button onClick={() => { this.alert }}>Показать больше</button>
                    </div>
                </div >
            </div>
        );
    }
}


export default Users;