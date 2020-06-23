import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Button_Functional } from "../../components/button/button_functional";
import pageCSS from "./project_create.css"
import { Page_Title } from "../../components/page_title/page_title";
import Select from 'react-select';
import cookie from 'react-cookies'

class Project_Create extends React.Component {
    state = {
        userID: cookie.load("userIdCookie"),
        title: "",
        category: "",
        description: "",
        date_start: "",
        date_finish: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
        console.log(`State:`, this.state);
    }

    handleChangeCategory = category => {
        this.setState(
            { category },
            () => console.log(`Option selected:`, this.state.category)
        );
    };

    handleSubmit = (event) => {
        event.preventDefault();

        /*let data = {
            name: this.state.title,
            category: this.state.category.value,
            description: this.state.description,
            projectstart: this.state.date_start,
            projectend: this.state.date_finish,
        };*/
        let data;

        if (this.state.userid !== '' && this.state.title !== '' && this.state.category !== '' &&
            this.state.description !== '' && this.state.data_start !== '') {
            if (this.state.date_finish !== '') {
                data = {
                    name: this.state.title,
                    category: this.state.category.value,
                    description: this.state.description,
                    projectstart: this.state.date_start,
                };
            }
            else {
                data = {
                    name: this.state.title,
                    category: this.state.category.value,
                    description: this.state.description,
                    projectstart: this.state.date_start,
                    projectend: this.state.date_finish,
                };
            }

            // console.log('name', this.state.name, 'phone ', this.state.phone, 'address ', this.state.address);
            console.log("forming fetch", data);
            fetch(`http://api.flamingspace.sevsu.ru/projects/edit/userid=${this.state.userID}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            console.log("json data", JSON.stringify(data))
                .then(response => console.log(response))
                .catch(error => console.log(error));

        }
        else {
            alert('no')
        }
    }

    render() {
        return (
            <div>
                <TopHeader section="Проекты" />
                <div className="container">
                    <Page_Title title="Создать проект" />
                    <hr />
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form__item">
                            <label className="form__item-label">Название</label>
                            <input onChange={event => { this.handleChange(event, "title") }}
                                className="form__item-field" maxLength="30"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Категория</label>
                            <Select className="select-list" value={this.state.category} onChange={this.handleChangeCategory}
                                options={[{ value: 'IT', label: 'IT' }, { value: 'Ordinary', label: 'Ordinary' }]}
                                placeholder="Выберете категорию" />
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Описание</label>
                            <textarea onChange={event => { this.handleChange(event, "description") }}
                                className="description" maxLength="1000" rows="13" cols="120" className="form__item-textarea"></textarea>
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата начала</label>
                            <input type="text" onChange={event => { this.handleChange(event, "date_start") }}
                                className="form__item-field form__item-field_date" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата окончания</label>
                            <input type="text" onChange={event => { this.handleChange(event, "date_finish") }}
                                className="form__item-field form__item-field_date" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                        <div className="submit-container">
                            <Button_Functional type="submit" text="Создать проект" />
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Project_Create;