import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
//import TopHeader from "../../topheader/topheader";

class MobileApp extends React.Component {

    breadcrumbs = [{ link: "#", title: "Мобильное приложение" }];

    render() {
        return (
            <div>
                <TopHeader section="Мобильное приложение" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <h1>MOBILE APP</h1>
                </div>
            </div>
        )
    }
}

export default MobileApp;