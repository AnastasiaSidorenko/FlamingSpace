import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Projects from "../pages/projects/projects"
import Project from "../pages/project/project";
import Project_Create from "../pages/project_create/project_create";

const router = express.Router();

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
    //if not authorized redirect to authentication
    const reactComp = renderToString(< Project_Create />);
    res.status(200).render('pages/project_create', { reactApp: reactComp, initialData: false });
});

router.get('/:ID', async (req, res) => {
    const reactComp = renderToString(< Project />);
    res.status(200).render('pages/project', { reactApp: reactComp, initialData: false, projectID: req.params.ID }); //add projectID: ID
});

/*router.get('/:ID', async (req, res) => {
    ID = req.params.ID;
    const reactComp = renderToString(< Project />);
    res.status(200).render('pages/project', { reactApp: reactComp, projectID: ID });
});*/


export default router;