import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import index from "./index.css"
import background from "./background.jpg"

class Index extends React.Component {

    render() {
        return (
            <div>
                <TopHeader section="Главная" />
                <div className="content__container">
                    <div className="flex__centered">
                        <h2>Добро пожаловать</h2>
                        <h1>Площадка Проектов - FlamingSpace SevSU</h1>
                        <h3>Сервис для кооперации пользователей в поисках команды, проекта для участия,
                            <br /> реализации собственной идеи проекта и поиска единомышленников</h3>
                    </div>
                </div>
            </div >
        )
    }
}

export default Index;