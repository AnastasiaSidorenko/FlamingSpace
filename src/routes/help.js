import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Help from "../pages/help/help"

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< Help />); // So that program doesn't break
    res.status(200).render('pages/index', { reactApp: reactComp });
});

export default router;