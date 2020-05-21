import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
//import TopHeader from "../../topheader/topheader";

class MobileApp extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "#", title: "Мобильное приложение" }] }
    }

    render() {
        return (
            <div>
                <TopHeader />
                <BreadCrumbs pages={this.breadcrumbs} />
                <h1>MOBILE APP</h1>
            </div>
        )
    }
}

export default MobileApp;