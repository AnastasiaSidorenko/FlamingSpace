import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import { pic } from "./error_pic.svg"

class Error extends React.Component {
    constructor(props) {
        super(props);
        let data
        if (props.initialData) {
            data = props.initialData;
        }
        else {
            data = JSON.parse(window.__initialData__);
            delete window.__initialData__;
        }
        this.state = {
            message: data.message,
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