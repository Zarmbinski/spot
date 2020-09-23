'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    console.log(`Hello World. I am Spot`);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "message": "Hello World. I am Spot"}));
});

app.get('/health', (req, res) => {
    console.log(`Just checking if I am healthy`);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "status": "UP" }));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
