import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Users from "../pages/users/users"
//import { userID } from "./auth";

const router = express.Router();

router.get('/', async (req, res) => {
    const reactComp = renderToString(< Users />); // So that program doesn't break
    res.status(200).render('pages/index', { reactApp: reactComp });
});

export default router;