import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
//import TopHeader from "../../topheader/topheader";

class About extends React.Component {
    constructor() {
        super()
        this.state = { breadcrumbs: [{ link: "#", title: "О сервисе" }] }
    }

    render() {
        return (
            <div>
                <TopHeader />
                <BreadCrumbs pages={this.breadcrumbs} />
                <h1>ABOUT</h1>
            </div>
        )
    }
}

export default About;