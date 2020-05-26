import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Users from "../pages/users/users"
import "isomorphic-fetch";

const router = express.Router();
//const apiURL = require('/server.js').apiURL;

router.get('/', (req, res) => {
    Users.requestInitialData()
        //fetch("https://api.randomuser.me/?results=20")
        //   .then(response => response.json())
        .then(initialData => {
            const reactComp = renderToString(< Users initialData={initialData} />);
            //<script type="text/javascript">window.__initialData__ = ${ JSON.stringify(initialData) }</script>
            res.status(200).render('pages/users', { reactApp: reactComp });
        })
});

export default router;