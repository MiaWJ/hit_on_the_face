'use strict';

const express = require('express');
const path = require('path');
const buildPath = path.join(__dirname, './api/assets');

// INITIALIZE EXPRESS
let app = express();

// angular app
app.use(express.static(buildPath));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '.api/assets/index.html')));

app.listen(5000, () => {
    console.log('running on port 5000');
});
module.exports = app; 