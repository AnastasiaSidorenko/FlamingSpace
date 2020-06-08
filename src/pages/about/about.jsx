import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
//import TopHeader from "../../topheader/topheader";
import pageCSS from "./about.css"

class About extends React.Component {

    breadcrumbs = [{ link: "#", title: "О сервисе" }];

    render() {
        return (
            <div>
                <TopHeader section="О сервисе" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <div className="text">
                        Площадка Проектов (Flaming Space) - это система предназначенная для кооперации пользователей в одной информационной среде через единый аккаунт системы Leader-ID. Площадка проектов «FlamingSpace SevSU» является сервисом для поиска проектов и поиска команды на выполнение проекта, наработки навыков командной работы и профессиональных навыков.
                    </div>
                </div>
            </div>
        )
    }
}

export default About;