import express from "express";
import axios from "axios";
import React from "react";
import { renderToString } from "react-dom/server"
import Auth from "../pages/auth/auth"

const router = express.Router();

//APP Keys for Leader_ID
const appID = '031140a5c46d6e46b49e5a7c2c35c3c2'
const appSecret = 'ab37e3db90e513e1dcfee27312455c18'

let userID = '';
let access_token = ''
let _indexURL = "http://localhost:3000/"
let _redirectURL = "http://localhost:3000/auth/redirect"

router.get('/', async (req, res) => {
    res.redirect(`https://leader-id.ru/api/oauth/authorize?client_id=${appID}&redirect_uri=${_redirectURL}&response_type=code&state`)
})

router.get('/redirect', async (req, res) => {
    let auth_code = req.query.code
    axios({
        method: 'post',
        url: `https://leader-id.ru/api/oauth/access_token?grant_type=authorization_code&code=${auth_code}&client_id=${appID}&client_secret=${appSecret}&redirect_uri=${_redirectURL}`,
    })
        .then((response) => {
            let userID = response.data.user_id;
            access_token = response.data.access_token;
            console.log(response);
            console.log(userID);
            console.log(access_token)
            res.cookie("userIdFS", userID)
            res.redirect(_indexURL)
            exports.userID = userID;
        })
        .catch(error => {
            console.log(error)
        })
})

router.get('/logout', async (req, res) => {
    access_token = '';
    userID = '';
    exports.userID = '';
    res.clearCookie("userIdFS")
    res.redirect(_indexURL)
    // const reactComp = renderToString(< Auth />); // So that program doesn't break
    //res.status(200).render('pages/index', { reactApp: reactComp });
    //const requestToken = req.query.code
});

export default router;