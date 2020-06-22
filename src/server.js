import express from "express";
import compression from "compression";
import axios from "axios";

import index from "./routes/index";
import users from "./routes/users";
import projects from "./routes/projects";
import mobileapp from "./routes/mobileapp";
import about from "./routes/about";
import help from "./routes/help";
import auth from "./routes/auth";
import account from "./routes/account";

//
import { renderToString } from "react-dom/server"
import Account from "./pages/account/account"
import Account_Edit from "./pages/account_edit/account_edit"
import User from "./pages/account/user";
import React from "react";
//

import path from "path";

// One of the following

// Server var
var helmet = require('helmet');
const Keyv = require('keyv');
const app = express();
const cookieParser = require('cookie-parser')

var loggedUsers = new Keyv();

exports.apiURL = "api.flamingspace.sevsu.ru"

// View engine setup
app.set("views", path.join(__dirname, 'static', "views"));
app.set("view engine", "ejs");

// Middleware
app.use(helmet());

app.use(compression())
app.use(cookieParser())
app.use('/public', express.static(path.join(__dirname, 'static', 'public')));

//Routes
app.use("/", index);
app.use("/users", users);
app.use("/projects", projects);
app.use("/mobileapp", mobileapp);
app.use("/about", about);
app.use("/help", help);
//app.use("/auth", auth);
//app.use("/account", account);

//auth
const appID = '031140a5c46d6e46b49e5a7c2c35c3c2'
const appSecret = 'ab37e3db90e513e1dcfee27312455c18'

let _indexURL = "http://localhost:3000/users"

app.get('/auth', async (req, res) => {
    let _redirectURL = "http://localhost:3000/auth/redirect"
    res.redirect(`https://leader-id.ru/api/oauth/authorize?client_id=${appID}&redirect_uri=${_redirectURL}&response_type=code&state`)
})

app.get('/auth/redirect', async (req, res, next) => {
    let _redirectURL = "http://localhost:3000/auth/redirect"
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

            loggedUsers.set(userID, access_token);

            let pic;

            axios({
                method: 'get',
                url: `https://leader-id.ru/api/users/current?access_token=${access_token}`,
            })
                .then((result) => {
                    console.log("userdata", result)
                    console.log("userPhoto", result.data.Data.Photo.Medium)
                    if (result.data.Data.Photo.Medium) {
                        pic = result.data.Data.Photo.Medium;
                        res.cookie("userPic", pic)
                        console.log("pic", pic)
                    }
                })

            res.cookie("userIdCookie", userID)
            res.cookie("userToken", access_token)
            if (pic) {
                res.cookie("userPic", pic)
            }
            next()
            //res.redirect(_indexURL)
            //res.cookie("userIdCookie", userID, { secure: true })
            // res.cookie("userToken", access_token, { secure: true })
        })
        .catch(error => {
            console.log(error)
        })
}, function (req, res, next) { res.redirect(_indexURL) })

app.get('/auth/logout', async (req, res) => {
    await loggedUsers.delete(req.cookies.userIdCookie);

    res.clearCookie("userIdCookie")
    res.clearCookie("userToken")
    if (req.cookies.pic) {
        res.clearCookie("userPic", pic)
    }
    res.redirect(_indexURL)
});

let _redirectURL = "http://localhost:3000/auth"

app.get("/account/edit", async (req, res) => {
    let token = await loggedUsers.get(req.cookies.userIdCookie)
    if (token == req.cookies.userToken) {
        const reactComp = renderToString(< Account_Edit />);
        res.status(200).render('pages/account_edit', { reactApp: reactComp, initialData: false });
    }
    else {
        res.redirect(_redirectURL);
    }
});

app.get("/account/:ID", async (req, res) => {
    let token = await loggedUsers.get(req.cookies.userIdCookie)
    console.log("TOKEN", token)

    if (req.params.ID == req.cookies.userIdCookie && token == req.cookies.userToken) {//if ID like in Cookie and user has token
        const reactComp = renderToString(< Account />);
        res.status(200).render('pages/account', { reactApp: reactComp, initialData: false });
    }
    else {
        const reactComp = renderToString(< User />);
        res.status(200).render('pages/user', { reactApp: reactComp, initialData: false });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`)
});