import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import { userID } from "./auth";

const router = express.Router();

router.get("/:userID", async (req, res) => {
    if (userID == clientID) {
        res.send("<h2>Это аккаунт пользователя!</h2>");
    }
    else {
        res.send("<h2>Это не ваш аккаунт!</h2>");
    }
    // const reactComp = renderToString(< Index />); // So that program doesn't break
    //res.status(200).render('pages/index', { reactApp: reactComp, user: 'admin' });
});

export default router;