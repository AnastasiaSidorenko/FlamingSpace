import express from "express";
import React from "react";
import { renderToString } from "react-dom/server"
import Account from "../pages/account/account"
import Account_Edit from "../pages/account_edit/account_edit"
import User from "../pages/account/user";

const router = express.Router();
let userID
let _redirectURL = "http://localhost:3000/auth"

router.get("/edit", async (req, res) => {
    let token = await loggedUsers.get(req.cookies.userIdCookie)
    if (token == req.cookies.userToken) {
        const reactComp = renderToString(< Account_Edit />);
        res.status(200).render('pages/account_edit', { reactApp: reactComp, initialData: false });
    }
    else {
        res.redirect(_redirectURL);
    }
});

router.get("/:ID", async (req, res) => {
    let token = await loggedUsers.get(req.cookies.userIdCookie)

    if (req.params.ID == req.cookies.userIdCookie && token == req.cookies.userToken) {//if ID like in Cookie and user has token
        const reactComp = renderToString(< Account />);
        res.status(200).render('pages/account', { reactApp: reactComp, initialData: false });
    }
    else {
        const reactComp = renderToString(< User />);
        res.status(200).render('pages/user', { reactApp: reactComp, initialData: false });
    }
});

export default router;