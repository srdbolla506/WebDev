/*
// Created by Sri Divya Bolla
//
// Creating an Auth Middleware 
// Create an auth middleware that verifies if a user is logged in and ends the request early if the user isn't logged in
*/

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

let users = [];
const JWT_SECRET = "fjehfuednbfhebdjedbdebdhebd";

function logger(req, res, next) {
    console.log(req.method + " request with endpoint: " + req.url);
    next();
}

app.post('/signup', logger, function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    if (users.length > 0) {
        if (users.find(user => user.username === username)) {
            res.json({
                message: "You are already signed up"
            });
            return;
        }
    } 
    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You have been signed up"
    });
    return;
});

app.post('/signin', logger, function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (users.length > 0) {
        if (users.find(user => (user.username === username) && (user.password === password))) {
            const jwt_token = jwt.sign({
                username: username
            }, JWT_SECRET);

            res.json({
                message: "You have been signed in successfully",
                token: jwt_token
            });
            return;
        } else {
            res.json({
                message : "Invalid credentials"
            })
            return;
        }
    }
});

// localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    let username = decodedInfo.username;

    if (username) {
        req.username = username;
        next();
    }
     else {
        res.json({
            message: "User hasn't been signed in or please sign in again"
        });
    }
}

app.get('/me', logger, auth, function(req, res) {
    let username = req.username;
    let foundUser = null;

    for (let i=0; i<users.length; i++) {
        if (users[i].username === username) {
            foundUser = users[i];
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});


app.listen(3000);
