import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Index from "../pages/index/index"
import { userID } from "./auth";

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< Index />); // So that program doesn't break

    res.status(200).render('pages/index', { reactApp: reactComp });
});

export default router;