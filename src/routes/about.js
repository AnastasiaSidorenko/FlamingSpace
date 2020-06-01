import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import About from "../pages/about/about"

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< About />);
    res.status(200).render('pages/about', { reactApp: reactComp, initialData: false });
});

export default router;