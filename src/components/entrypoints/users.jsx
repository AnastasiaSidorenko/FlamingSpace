import React from "react";

import { hydrate } from "react-dom";

//import ReactDOM from "react-dom";//during dev, REMOVE!!!!!!!

import Users from '../../pages/users/users'

hydrate(<Users />, document.getElementById("root"));
//ReactDOM.render(<Users />, document.getElementById("root"));