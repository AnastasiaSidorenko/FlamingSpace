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
            users: initialUsers.results,
            page: 0,
            filter: "",
            error: false
        }
    }

    breadcrumbs = [{ link: "#", title: "Участники" }];


    static requestInitialData() {
        // return fetch("https://api.flamingspace.sevsu.ru/users/0/20")
        return fetch("https://api.randomuser.me/?results=2")
            .then(response => response.json())
    };

    alert() {
        console.log("Show more clicked")
    };

    fetchUsers = () => {
        this.setState({ loading: true });
        //fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page + 1}/20${this.state.filter}`)
        fetch("https://api.randomuser.me/?results=2")
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, users: [...this.state.users, ...data.results] });
                console.log("this.state.users", this.state.users)
            })
            .catch(e => {
                console.log(e);

                //this.setState({ ...this.state, loading: false });
            });
    }

    fetchFilteredUsers = (url, filter) => {
        let _filter = filter.replace(/%20/g, "+");
        let _url = url.replace(/%20/g, "+");
        this.setState({ users: [], loading: true, page: 0, filter: _filter });
        //fetch(`https://api.flamingspace.sevsu.ru/users/${this.state.page + 1}/20`)
        fetch(_url)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)
                this.setState({ loading: false, users: [...data.results] });
                console.log("this.state.filtered-users", this.state.users)
            })
            .catch(e => {
                if (e == "Failed to fetch")
                    console.log(e);
                this.setState({ loading: false, error: "Не удалось загрузить данные" })
            });
    }

    render() {
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

    searchByFilters = () => {
        if (!this.state.fio && !this.state.status) {
            return
        }
        if (this.state.fio && this.state.status) {
            return this.props.getFilteredData(`http://localhost:3012/users/0/20?status=${this.state.status}&fio=${this.state.fio}`,
                `?status=${this.state.status}&fio=${this.state.fio}`);
        }
        if (this.state.fio) {
            return this.props.getFilteredData(`http://localhost:3012/users/0/20?fio=${this.state.fio}`,
                `?fio=${this.state.fio}`);
        }
        if (this.state.status) {
            return this.props.getFilteredData(`http://localhost:3012/users/0/20?status=${this.state.status}`,
                `?status=${this.state.status}`);
        }
    }

    render() {
        return (
            <div>
                <div className="flex__space-between">
                    <Search name="фио" onChange={event => { this.handleChange(event, "fio") }} placeholder="Поиск по ФИО..." />
                    <Search placeholder="Выберите сферу деятельности..." />
                    <Search name="статус" onChange={event => { this.handleChange(event, "status") }} placeholder="Выберите статус..." />
                    <Search placeholder="Выберите статус..." />
                </div>
                <Button_apply_filter onClick={this.searchByFilters} />
            </div >
        )
    }
}


export default Users;