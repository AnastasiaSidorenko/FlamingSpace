import React from "react";

import { hydrate } from "react-dom";

//import ReactDOM from "react-dom";//during dev, REMOVE!!!!!!!

import User from '../../pages/account/user'

hydrate(<User />, document.getElementById("root"));