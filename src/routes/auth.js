import express from "express";
import axios from "axios";
import React from "react";
import { renderToString } from "react-dom/server"
import Auth from "../pages/auth/auth"
import Users from "../pages/users/users";

const router = express.Router();

//APP Keys for Leader_ID
const appID = '031140a5c46d6e46b49e5a7c2c35c3c2'
const appSecret = 'ab37e3db90e513e1dcfee27312455c18'


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
            let access_token = response.data.access_token;
            console.log(response);
            console.log(userID);
            console.log(access_token)

            await loggedUsers.set(userID, access_token);

            //Saving pic url in cookie
            axios({
                method: 'get',
                url: `https://leader-id.ru/api/users/current`,
            })
                .then((result) => {
                    let pic = result.Data.Photo.Medium
                    if (pic) {
                        res.cookie("userPic", pic)
                    }
                })

            res.cookie("userIdCookie", userID, { secure: true })
            res.cookie("userIdCookie", userID, { secure: true })
            res.cookie("userToken", access_token, { secure: true })

            res.redirect(_indexURL)
        })
        .catch(error => {
            console.log(error)
        })
})

router.get('/logout', async (req, res) => {
    await loggedUsers.delete(req.cookies.userIdCookie);

    res.clearCookie("userIdCookie")
    res.clearCookie("userToken")
    res.clearCookie("userPic", pic)
    res.redirect(_indexURL)
});

export default router;