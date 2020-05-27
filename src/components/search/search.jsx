import React from 'react'
//import cookie from 'react-cookies'
//import logo from "./logo.jpg"
import componentCSS from "./search.css"
import search__icon from "./search__icon.png"

export class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <input type="text" onChange={this.props.onChange} className="search__field" placeholder={this.props.placeholder}></input>
                <img className="search__icon" src={search__icon} alt="" />
            </div>
        )
    }
}