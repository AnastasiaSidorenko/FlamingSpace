import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Projects from "../pages/projects/projects"
import Project from "../pages/project/project";
import Project_Create from "../pages/project_create/project_create";

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< Projects />);
    res.status(200).render('pages/projects', { reactApp: reactComp });
});

router.get('/create', async (req, res) => {
    //if not authorized redirect to authentication
    const reactComp = renderToString(< Project_Create />);
    res.status(200).render('pages/project_create', { reactApp: reactComp });
});

router.get('/:ID', async (req, res) => {
    const reactComp = renderToString(< Project />);
    res.status(200).render('pages/project', { reactApp: reactComp, projectID: req.params.ID }); //add projectID: ID
});

/*router.get('/:ID', async (req, res) => {
    ID = req.params.ID;
    const reactComp = renderToString(< Project />);
    res.status(200).render('pages/project', { reactApp: reactComp, projectID: ID });
});*/


export default router;