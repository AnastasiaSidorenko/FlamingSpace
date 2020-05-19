import express from "express";
import compression from "compression";
//import axios from "axios";

import index from "./routes/index";
import users from "./routes/users";
import projects from "./routes/projects";
import mobileapp from "./routes/mobileapp";
import about from "./routes/about";
import help from "./routes/help";
import auth from "./routes/auth";
import account from "./routes/account";

import path from "path";

// Server var
const app = express();

// View engine setup
app.set("views", path.join(__dirname, 'static', "views"));
app.set("view engine", "ejs");

// Middleware
app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'static', 'public')));
//app.use('/styles', express.static(path.join(__dirname + 'styles')))
//app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use("/", index);
app.use("/users", users);
app.use("/projects", projects);
app.use("/mobileapp", mobileapp);
app.use("/about", about);
app.use("/help", help);
app.use("/auth", auth);
app.use("/account", account);

const port = process.env.PORT || 3000;

app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`)
});