import React from 'react'
//import cookie from 'react-cookies'
//import logo from "./logo.jpg"
import componentCSS from "./search.css"
import search__icon from "./search__icon.png"

export class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            text: "",

        }
        //this.state = { cookie_userID: cookie.load("userIdCookie") }
    }

    render() {
        return (
            <div className="search">
                <input type="text" className="search__field" placeholder={this.props.placeholder}>
                    <img src={search__icon} alt="" />
                </input>
            </div>
        )
    }
}