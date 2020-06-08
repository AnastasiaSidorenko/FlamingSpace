import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
//import TopHeader from "../../topheader/topheader";
import pageCSS from "./mobileapp.css"

class MobileApp extends React.Component {

    breadcrumbs = [{ link: "#", title: "Мобильное приложение" }];

    render() {
        return (
            <div>
                <TopHeader section="Мобильное приложение" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <div className="text">
                        <p> У Площадки Проектов и Точки Кипения есть мобильное приложение </p>
                        <p>Скачать мобильное приложение можно по ссылке:</p><a href="#"></a>
                    </div>
                    <img />
                </div>
            </div>
        )
    }
}

export default MobileApp;