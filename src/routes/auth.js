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
    //const requestToken = req.query.code
    /*axios({
        method: 'post',
        url: `https://leader-id.ru/api/oauth/authorize?client_id=${appID}&redirect_uri=${_redirectURL}&response_type=code&state`,
    })*/
    let auth_code = req.query.code
    axios({
        method: 'post',
        url: `https://leader-id.ru/api/oauth/access_token?grant_type=authorization_code&code=${auth_code}&client_id=${appID}&client_secret=${appSecret}&redirect_uri=${_redirectURL}`,
        // Set the content type header, so that we get the response in JSON
    })
        .then((response) => {
            userID = response.data.user_id;
            access_token = response.data.access_token;
            console.log(response);
            console.log(userID);
            console.log(access_token)
            res.redirect(_indexURL)
        })
        .catch(error => {
            console.log(error)
        })
})

router.get('/signout', async (req, res) => {
    access_token = '';
    userID = '';
    res.send("<h2>Вы вышли!!!</h2>");
    // const reactComp = renderToString(< Auth />); // So that program doesn't break
    //res.status(200).render('pages/index', { reactApp: reactComp });
    //const requestToken = req.query.code
});

export default router;
export { userID, access_token };