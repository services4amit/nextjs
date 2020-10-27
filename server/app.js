'use strict';

var express = require('express');
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/api/simpleGet', (req, res) => {
        return res.status(200).send("GEt Call Succesful")
    });
    server.get("*", (req, res) => {
        return handle(req, res);
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on Port: ` + port)
    })
})
