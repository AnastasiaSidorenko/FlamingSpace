import React from "react";

import { hydrate } from "react-dom";

import Account from '../../pages/account/account'

hydrate(<Account />, document.getElementById("root"));