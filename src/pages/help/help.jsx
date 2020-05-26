import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
//import TopHeader from "../../topheader/topheader";

class Help extends React.Component {

    breadcrumbs = [{ link: "#", title: "Помощь" }];

    render() {
        return (
            <div>
                <TopHeader />
                <BreadCrumbs pages={this.breadcrumbs} />
                <h1>HELP</h1>
            </div>
        )
    }
}

export default Help;