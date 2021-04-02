const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const Student = require('./route/student.route');

const app = express();

mongoose.connect('mongodb://localhost/StudentDb', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.log("Could not connect to database", err);
        process.exit();
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/student', Student); 

app.listen(3000, () => {
    console.log('Server connected to port 3000')
})