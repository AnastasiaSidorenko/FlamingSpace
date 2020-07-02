import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import pic from "./img/error_pic.png";

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
                    <div>
                        <h2>Ошибка: {this.state.message}</h2>
                        <img src={pic} className="error__img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Error_page;