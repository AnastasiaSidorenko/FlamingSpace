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
            console.log("props data", initialUsers)
        }
        else {
            initialUsers = JSON.parse(window.__initialData__);
            console.log("window data", initialUsers)
            delete window.__initialData__;
        }
        this.state = {
            loading: false,
            users: initialUsers.data,
            page: 1,
            filter: "",
            error: ""
        }
        console.log(this.state);
    }

    breadcrumbs = [{ link: "#", title: "Участники" }];

    static requestInitialData() {
        //const _url = "https://api.flamingspace.sevsu.ru/users/0/20"
        return fetch("https://api.flamingspace.sevsu.ru/users/0/20")
            //return fetch("https://api.randomuser.me/?results=20")
            .then(response => response.json())
    };

    fetchUsers = () => {
        this.setState({ loading: true });
        fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page}/20${this.state.filter}`)
            .then(response => response.json())
            .then(results => {
                console.log("data", data)
                if (results.data.length != 0) {
                    this.setState({ loading: false, page: (this.state.page + 1), users: [...this.state.users, ...results.data], error: "" });
                    console.log("this.state.users", this.state.users)
                }
                else {
                    this.setState({ loading: false, error: "Пользователей больше не найдено" })
                }
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false, error: "Не удалось загрузить данные" })
            });
    }


    fetchFilteredUsers = (filter) => {
        this.setState({ users: [], loading: true, page: 0, filter: filter });
        fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page}/20${this.state.filter}`)
            .then(response => response.json())
            .then(results => {
                if (results.data.length != 0) {
                    this.setState({ loading: false, page: (this.state.page + 1), users: [...results.data] });
                    console.log("this.state.filtered-users", this.state.users)
                }
                else {
                    this.setState({ loading: false, error: "Пользователей больше не найдено" })
                }
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false, error: "Не удалось загрузить данные" })
            });
    }

    render() {
        let users = this.state.users.map((user, index) => (
            <User_Card key={index} FLname={`${user.lastname}  ${user.firstname}`} img={user.photo}
                nickname={user.nickname} id={user.id} status={user.status} skills={user.competences} />
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
                        <span className="capture">{this.state.loading ? 'Загрузка...' : ''}</span>
                        <span className="capture">{this.state.error ? this.state.error : ''}</span>
                        <div>{(this.state.loading) ? '' : <Button_Functional text="Показать больше" onClick={this.fetchUsers} />}</div>
                    </div>
                </div >
            </div >
        );
    }
}

class Search_Bar extends React.Component {
    state = {
        LFname: "",
        status: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
    }

    getFilter = () => {
        let filter;
        if (!this.state.fio && !this.state.status) {
            return;
        }
        if (this.state.fio) {
            filter = `?fio=${this.state.LFname}` + (this.state.status ? `&status=${this.state.status}` : '')
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
                    <Search name="fio" onChange={event => { this.handleChange(event, "LFname") }} placeholder="Поиск по Фамилии и имени.." />
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