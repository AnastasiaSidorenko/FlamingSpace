import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import MobileApp from "../pages/mobileapp/mobileapp"

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< MobileApp />); // So that program doesn't break
    res.status(200).render('pages/index', { reactApp: reactComp });
});

export default router;