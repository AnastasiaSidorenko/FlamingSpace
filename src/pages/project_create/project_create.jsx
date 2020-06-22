import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { Button_Functional } from "../../components/button/button_functional";
import pageCSS from "./project_create.css"
import { Page_Title } from "../../components/page_title/page_title";
import Select from 'react-select';

class Project_Create extends React.Component {
    state = {
        userID: cookie.load("userIdCookie"),
        title: "",
        category: "",
        description: "",
        data_start: "",
        data_finish: ""
    }

    handleChange = (event, name) => {
        this.setState({ [name]: event.target.value })
    }

    handleChangeCategory = category => {
        this.setState(
            { category },
            () => console.log(`Option selected:`, this.state.category)
        );
    };

    handleSubmit(event) {
        event.preventDefault();

        let data = {
            userid: this.state.userID,
            name: this.state.title,
            category: this.state.category,
            description: this.state.description,
            projectstart: this.state.data_start,
            projectend: this.state.data_finish,
        };

        if (this.state.userid && this.state.title !== '' && this.state.category !== '' &&
            this.state.description !== '' && this.state.data_start !== '') {
            // console.log('name', this.state.name, 'phone ', this.state.phone, 'address ', this.state.address);

            fetch("example.com/:id", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error));

        } else {
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
                    <form className="form" method="POST" onSubmit={this.handleSubmit}>
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
                            <input type="text" onChange={event => { this.handleChange(event, "data_start") }}
                                className="form__item-field form__item-field_date" name="input" placeholder="ДД.ММ.ГГГГ" />
                        </div>
                        <div className="form__item">
                            <label className="form__item-label">Дата окончания</label>
                            <input type="text" onChange={event => { this.handleChange(event, "data_finish") }}
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