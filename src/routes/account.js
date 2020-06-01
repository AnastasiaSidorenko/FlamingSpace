import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Account from "../pages/account/account"
import Account_Edit from "../pages/account_edit/account_edit"

const router = express.Router();
let userID
let _redirectURL = "http://localhost:3000/auth/logout"

router.get("/edit", async (req, res) => {
    /*userID = require('./auth').userID;
    userID = parseInt(userID, 10);
    console.log("userID"); console.log(userID);
    console.log("req.cookies.userIdCookie"); console.log(req.cookies.userIdCookie);
    console.log("req.params.ID"); console.log(req.params.ID);
    if (!userID) {
        res.redirect(_redirectURL)
    }
    if ((req.cookies.userIdCookie == userID) && (req.params.ID == userID)) {*/
    const reactComp = renderToString(< Account_Edit />);
    res.status(200).render('pages/account_edit', { reactApp: reactComp, initialData: false });
    /* }
     else {
         res.send("<h2>Это не ваш аккаунт!</h2>");
     }*/
    // const reactComp = renderToString(< Index />); 
    //res.status(200).render('pages/index', { reactApp: reactComp, user: 'admin' });
});

router.get('/', async (req, res) => {
    const reactComp = renderToString(< Account />);
    res.status(200).render('pages/account', { reactApp: reactComp, initialData: false });
});

router.get("/:ID", async (req, res) => {
    /*
    userID = require('./auth').userID;
    userID = parseInt(userID, 10);
    console.log("userID"); console.log(userID);
    console.log("req.cookies.userIdCookie"); console.log(req.cookies.userIdCookie);
    console.log("req.params.ID"); console.log(req.params.ID);
    if (!userID) {
        res.redirect(_redirectURL)
    }
    if ((req.cookies.userIdCookie == userID) && (req.params.ID == userID)) {
    */
    const reactComp = renderToString(< Account />);
    res.status(200).render('pages/account', { reactApp: reactComp, initialData: false });

    /*
}
else {
    res.send("<h2>Это не ваш аккаунт!</h2>");
}
*/
});

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
        const reactComp = renderToString(< Account />);
        res.status(200).render('pages/account', { reactApp: reactComp, initialData: false });
    }
    else {
        res.send("<h2>Это не ваш аккаунт!</h2>");
    }
    // const reactComp = renderToString(< Index />); 
    //res.status(200).render('pages/index', { reactApp: reactComp, user: 'admin' });
});


export default router;