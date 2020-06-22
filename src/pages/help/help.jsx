import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs";

class Help extends React.Component {

    breadcrumbs = [{ link: "#", title: "Помощь" }];

    render() {
        return (
            <div>
                <TopHeader section="Помощь" />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <p>В данном разделе размещаются ответы на часто задаваемые вопросы</p>
                </div>
            </div>
        )
    }
}

export default Help;