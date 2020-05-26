import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";
//import TopHeader from "../../topheader/topheader";

class About extends React.Component {

    breadcrumbs = [{ link: "#", title: "О сервисе" }];

    render() {
        return (
            <div>
                <TopHeader section="О сервисе" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <h1>ABOUT</h1>
                </div>
            </div>
        )
    }
}

export default About;