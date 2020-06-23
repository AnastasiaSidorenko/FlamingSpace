import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Users from "../pages/users/users"
import Error from "../pages/error/error"
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
    fetch(`http://api.flamingspace.sevsu.ru/users/id=${ID}`)
        //return fetch("https://api.randomuser.me/?results=5")
        .then(response => response.json())
        .then(initialData => {
            let data = initialData;
            console.log(data);
            if (!data.data.error_code) {
                const reactComp = renderToString(< User />);
                res.status(200).render('pages/user', { reactApp: reactComp, initialData: data });
            }
            else {
                const reactComp = renderToString(< Error />);
                res.status(200).render('pages/error', { reactApp: reactComp, initialData: data });
            }
        })
        .catch(error => console.log(error));
});

export default router;