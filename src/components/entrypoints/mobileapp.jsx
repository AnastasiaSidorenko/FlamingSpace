import React from "react";

import { hydrate } from "react-dom";

import MobileApp from '../../pages/mobileapp/mobileapp'

hydrate(<MobileApp />, document.getElementById("root"));