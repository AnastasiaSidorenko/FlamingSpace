import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pic from "./error_pic.svg";

class Error_page extends React.Component {
    constructor(props) {
        super(props);
        let data
        if (props.initialData) {
            data = props.initialData;
            console.log("props data", data)
        }
        else {
            data = JSON.parse(window.__initialData__);
            console.log("window data", data)
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
                    <img src={pic} className="error__img" /><p>Ошибка: {this.state.message}</p>
                </div>
            </div>
        )
    }
}

export default Error_page;