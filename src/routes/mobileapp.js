import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import MobileApp from "../pages/mobileapp/mobileapp"

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< MobileApp />);
    res.status(200).render('pages/mobileapp', { reactApp: reactComp, initialData: false });
});

export default router;