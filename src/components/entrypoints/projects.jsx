import React from "react";

import { hydrate } from "react-dom";

import Projects from '../../pages/projects/projects'

hydrate(<Projects />, document.getElementById("root"));