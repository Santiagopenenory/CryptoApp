const express = require('express');
const app = express()
require('dotenv').config()
require('./database')

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
        );
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization"
            );
            next();
        });
        
        
app.use(require('../routes/routes.js'))


app.use((req,res)=>{
    res.type('text/plane');
    res.status(404);
    res.send('404 - Not found');
})
app.listen(5000);