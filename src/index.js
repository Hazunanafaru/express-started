'use strict';

// Import necessary module
const express = require('express');
const cors = require('cors');
const compl = require('./model.js');

// Basic Setup
const app = express();
const port = 3001;
const complements = compl.complements;

// enable cors
app.use(cors())

// home route
app.get('/', (req, resp) => {
    resp.status(200).json({
        "message": "Welcome to tic-tac-toe!",
    });
});

// get complement route
app.get('/complement', (req, resp) => {
    // create random number for accesing complement array
    let rand_num = Math.floor(Math.random() * complements.length);
    let complement = complements[rand_num];
    if (complement === undefined) {
        resp.status(500).json({
            "message": "complement out of bound",
        });  
    }
    // Debug
    // console.log(`Complement: ${complement}`);
    
    resp.status(200).json({
        "message": complement,
    });
})

// start listening
app.listen(port, () => {
    console.log(`Tic-tac-toe API run on port: ${port}`)
})