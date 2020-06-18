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
            initialUsers = props.initialData;
            //console.log("props data", initialUsers)
        }
        else {
            initialUsers = JSON.parse(window.__initialData__);
            //console.log("window data", initialUsers)
            delete window.__initialData__;
        }
        this.state = {
            loading: false,
            users: initialUsers.results,
            page: 0,
            filter: "",
            error: false
        }
    }

    breadcrumbs = [{ link: "#", title: "Участники" }];

    static requestInitialData() {
        //const _url = "https://api.flamingspace.sevsu.ru/users/0/20"
        // return fetch("https://api.flamingspace.sevsu.ru/users/0/20")
        return fetch("https://api.randomuser.me/?results=20")
            .then(response => response.json())
    };

    alert() {
        console.log("Show more clicked")
    };

    fetchUsers = () => {
        this.setState({ loading: true });
        //fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page + 1}/20${this.state.filter}`)
        fetch("https://api.randomuser.me/?results=20")
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, users: [...this.state.users, ...data.results] });
                console.log("this.state.users", this.state.users)
            })
            .catch(e => {
                if (e == "Failed to fetch") {
                    this.setState({ loading: false, error: "Не удалось загрузить данные" })
                }
                console.log(e);
                //this.setState({ ...this.state, loading: false });
            });
    }

    fetchFilteredUsers = (filter) => {
        this.setState({ users: [], loading: true, page: 0, filter: filter });
        //fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page + 1}/20`)
        let _url = "http://localhost:3000/users/0/20" + filter;
        fetch(_url)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, users: [...data.results] });
                console.log("this.state.filtered-users", this.state.users)
            })
            .catch(e => {
                if (e == "Failed to fetch") {
                    this.setState({ loading: false, error: "Не удалось загрузить данные" })
                }
                console.log(e);
            });
    }

    render() {
        let users = this.state.users.map((user, index) => (
            <User_Card key={index} FLname={`${user.name.first}  ${user.name.last}`} img={user.picture.large}
                nickname={user.location.country} id="1234" />
        ));

        return (
            <div>
                <TopHeader section="Участники" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <Page_Title title="Участники" />

                    <Search_Bar getFilteredData={this.fetchFilteredUsers} />

                    <div className="grid">
                        {users}
                    </div>

                    <div className="flex__centered">
                        <p className="capture">{this.state.loading ? 'Загрузка...' : ''}</p>
                        <p className="capture">{this.state.error ? this.state.error : ''}</p>
                        {(this.state.loading && !this.state.error) ? '' : <Button_Functional text="Показать больше" onClick={this.fetchUsers} />}
                    </div>
                </div >
            </div >
        );
    }
}

class Search_Bar extends React.Component {
    state = {
        fio: "",
        status: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
    }

    getFilter = () => {
        if (!this.state.fio && !this.state.status) {
            return;
        }
        if (this.state.fio) {
            filter = `?fio=${this.state.fio}` + (this.state.status ? `&status=${this.state.status}` : "")
            return this.props.getFilteredData(filter);
        }
        if (this.state.status) {
            filter = `?status=${this.state.status}`
            return this.props.getFilteredData(filter);
        }
    }

    render() {
        return (
            <div>
                <div className="flex__space-between">
                    <Search name="fio" onChange={event => { this.handleChange(event, "fio") }} placeholder="Поиск по Фамилии и имени.." />
                    <Search placeholder="Выберите сферу деятельности..." />
                    <Search name="status" onChange={event => { this.handleChange(event, "status") }} placeholder="Выберите статус..." />
                    <Search placeholder="Выберите статус..." />
                </div>
                <Button_apply_filter onClick={this.getFilter} />
            </div >
        )
    }
}


export default Users;