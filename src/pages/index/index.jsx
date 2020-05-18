import React from "react";
import { TopHeader } from "../../components/topheader/topheader";
import global from "./global.css"

class Index extends React.Component {
    render() {
        return (
            <div>
                <TopHeader />
                <h1> INDEX </h1>
            </div>
        )
    }
}

export default Index;