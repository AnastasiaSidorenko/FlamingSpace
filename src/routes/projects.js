import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Projects from "../pages/projects/projects"

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< Projects />); // So that program doesn't break
    res.status(200).render('pages/projects', { reactApp: reactComp });
});

export default router;