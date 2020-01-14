const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger.js');


// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// set static folder
app.use(express.static(path.join(__dirname, 'public'))); // TODO:

app.use("/api/members", require("./route/api/members.js"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});