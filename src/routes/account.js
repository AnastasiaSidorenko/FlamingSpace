import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Account from "../pages/account/account"

const router = express.Router();
let userID
let _redirectURL = "http://localhost:3000/auth/logout"


router.get("/:ID", async (req, res) => {
    userID = require('./auth').userID;
    userID = parseInt(userID, 10);
    console.log("userID"); console.log(userID);
    console.log("req.cookies.userIdCookie"); console.log(req.cookies.userIdCookie);
    console.log("req.params.ID"); console.log(req.params.ID);
    if (!userID) {
        res.redirect(_redirectURL)
    }
    if ((req.cookies.userIdCookie == userID) && (req.params.ID == userID)) {
        const reactComp = renderToString(< Account />); // So that program doesn't break
        res.status(200).render('pages/account', { reactApp: reactComp });
    }
    else {
        res.send("<h2>Это не ваш аккаунт!</h2>");
    }
    // const reactComp = renderToString(< Index />); // So that program doesn't break
    //res.status(200).render('pages/index', { reactApp: reactComp, user: 'admin' });
});

export default router;