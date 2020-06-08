import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Users from "../pages/users/users"
import "isomorphic-fetch";

const router = express.Router();

router.get('/', async (req, res) => {
    Users.requestInitialData()
        .then(initialData => {
            const reactComp = renderToString(< Users initialData={initialData} />);
            let data = initialData;
            res.status(200).render('pages/users', { reactApp: reactComp, initialData: data });
        })
        .catch(error => console.log(error));
});

export default router;