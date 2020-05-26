import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Search } from "../../components/search/search";
import { Button_apply_filter } from "../../components/button/button_apply_filter";
import { User_Card } from "../../components/user_card/user_card";
import fpageCSS from "./users.css"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
import { Page_Title } from "../../components/page_title/page_title";
import { Button_Functional } from "../../components/button/button_functional";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: []
        }
        let initialUsers;
        if (props.initialData) {
            initialUsers = props.initialData;
            //console.log(initialUsers);
            this.setState({ users: initialUsers })
            console.log(this.state.users);
        }
        /*else {
            console.log(window);
            initialUsers = window.__initialData__;
            console.log(initialUsers);
            delete window.__initialData__;
        }*/
        //this.setState({ users: initialUsers })
        //this.setState = ({ users: initialUsers })
        //console.log(this.state.users);
    }

    breadcrumbs = [{ link: "#", title: "Участники" }];

    static requestInitialData() {
        return fetch("https://api.randomuser.me/?results=20")
            .then(response => response.json());
    }

    async fetchUsers() {
        this.setState({ loading: true });

        fetch("https://api.randomuser.me/?results=20")
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false, users: [...this.state.users, data.results] });
            })
            .catch(e => {
                console.log(e);
                //this.setState({ ...this.state, loading: false });
            });
    }

    render() {

        let users = this.state.users.map((user, index) => (
            <User_Card key={index} FLname={`${user.name.first}  ${user.name.last}`} img={user.picture.large} />
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
                        <p>{this.state.loading ? 'Fetching users...' : ''}</p>
                    </div>
                    <div>
                        {this.state.loading ? '' : <Button_Functional text="Показать больше" onClick={this.fetchUsers} />}
                    </div>
                </div >
            </div>
        );
    }
}


export default Users;