import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
//import TopHeader from "../../topheader/topheader";
import pageCSS from "./mobileapp.css"
import img1 from "./main.jpg"
import img2 from "./events.jpg"
import img3 from "./calendar.jpg"

class MobileApp extends React.Component {

    render() {
        return (
            <div>
                <TopHeader section="Мобильное приложение" />
                <div className="container">
                    <div className="content">
                        <div className="text">
                            <p> Мобильное приложение "FlamingSpace SevSU"<br />
                        Скачивание доступно по <a href="#">ссылке</a></p>
                        </div>
                        <div>
                            <img className="mobileapp__img" src={img1} />
                            <img className="mobileapp__img" src={img2} />
                            <img className="mobileapp__img" src={img3} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default MobileApp;