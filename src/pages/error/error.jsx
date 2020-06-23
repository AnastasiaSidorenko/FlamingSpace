import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { pic } from "./error_pic.svg"

class Error extends React.Component {
    constructor(props) {
        super(props);
        let data
        if (props.initialData) {
            data = props.initialData;
            console.log("props data", initialProjects)
        }
        else {
            data = JSON.parse(window.__initialData__);
            console.log("window data", initialProjects)
            delete window.__initialData__;
        }
        this.state = {
            message: data.error_description,
        }
    }

    render() {
        return (
            <div>
                <TopHeader />
                <div className="container">
                    <BreadCrumbs pages={this.breadcrumbs} />
                    <img src={pic} /><p>Ошибка: {this.state.message}</p>
                </div>
            </div>
        )
    }
}

export default Error;