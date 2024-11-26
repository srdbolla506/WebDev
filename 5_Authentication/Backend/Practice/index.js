
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [];
const JWT_SECRET = "randomDivyaJWTSECRET";

// Token based authentication
// function generateToken() {
//     const options = ["a", "b", "c", "d", "e", "0", "1", "2", "3", "4", "5"];
//     var token = "";
//     for (i=0; i<options.length; i++) {
//         token = token + options[Math.floor(Math.random()*options.length)];
//     }
//     return token;
// }

app.post('/signup', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username == undefined || username == "" || password == undefined || password == "") {
        res.json({
            message: "Please check your username or password or the body format"
        });
        return;
    }

    if (users.find((user) => user.username === username)) {
        res.json({
            message: "You have already signed up"
        });
        return;
    }

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up",
        count: users.length,
        users: users
    });
});

app.post('/signin', function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    if (users.find(user => ((user.username === username) && (user.password === password)))) {
        res.json({
            messgae: "Signed in successfully",
            token: jwt.sign({
                username: username
            }, JWT_SECRET)
        });
        return;
    } else {
        res.json({
            message: "Error signing in. Please check your username or password and try again"
        });
        return;
    }
});

app.get('/me', function(req, res) {

    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;

    let foundUser = null;

    for (let i=0; i<users.length; i++) {
        if (users[i].username == username) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
        return;
    } else {
        res.json({
            message: "token invalid"
        });
        return;
    }
    
});

app.listen(3000);
