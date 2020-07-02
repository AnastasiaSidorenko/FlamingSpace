import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Projects from "../pages/projects/projects"
import Project from "../pages/project/project";
import Project_Create from "../pages/project_create/project_create";
import Error_page from "../pages/error_page/error_page"

const router = express.Router();

let _redirectURL = "http://localhost:3000/auth"

router.get('/', async (req, res) => {
    Projects.requestInitialData()
        .then(initialData => {
            const reactComp = renderToString(< Projects initialData={initialData} />);
            let data = initialData;
            res.status(200).render('pages/projects', { reactApp: reactComp, initialData: data });
        })
        .catch(error => console.log(error));
});

router.get('/create', async (req, res) => {

    // let token = await loggedUsers.get(req.cookies.userIdCookie)
    // if (token == req.cookies.userToken) {
    const reactComp = renderToString(< Project_Create />);
    res.status(200).render('pages/project_create', { reactApp: reactComp, initialData: false });
    //  }
    // else {
    //     res.redirect(_redirectURL);
    //  }
});

router.get('/:ID', async (req, res) => {
    let ID = req.params.ID;
    fetch(`http://api.flamingspace.sevsu.ru/projects/${ID}`)
        .then(response => response.json())
        .then(initialData => {
            console.log(initialData);
            if (!initialData.error_code) {
                const reactComp = renderToString(< Project initialData={initialData} />);

                res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                res.status(200).render('pages/project', { reactApp: reactComp, initialData: initialData });
            }
            else {
                const reactComp = renderToString(< Error_page initialData={initialData} />);
                res.status(200).render('pages/error_page', { reactApp: reactComp, initialData: initialData });
            }
        })
        .catch(error => console.log(error));
    //res.status(200).render('pages/project', { reactApp: reactComp, initialData: false, projectID: req.params.ID }); //add projectID: ID
});

export default router;