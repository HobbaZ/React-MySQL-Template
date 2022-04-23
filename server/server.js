const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Turn on routing
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})