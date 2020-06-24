import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Users from "../pages/users/users"
import User from "../pages/account/user";
import Error_page from "../pages/error_page/error_page"
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

router.get('/:ID', async (req, res) => {
    let ID = req.params.ID;
    fetch(`http://api.flamingspace.sevsu.ru/users/${ID}`)
        .then(response => response.json())
        .then(initialData => {
            console.log(initialData);
            if (!initialData.error_code) {
                const reactComp = renderToString(< User initialData={initialData} />);
                res.status(200).render('pages/user', { reactApp: reactComp, initialData: initialData });
            }
            else {
                const reactComp = renderToString(< Error_page initialData={initialData} />);
                res.status(200).render('pages/error', { reactApp: reactComp, initialData: initialData });
            }
        })
        .catch(error => console.log(error));
});

export default router;