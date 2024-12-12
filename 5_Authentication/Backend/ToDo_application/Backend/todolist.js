const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();

const JWT_SECRET = "JWTTokenDivyaSecret"

app.use(express.static(path.join(__dirname, "../Frontend")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Frontend/todolist.html"));
});


app.listen(3000);