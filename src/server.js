const express = require("express");
const path = require("path");
require("dotenv").config(); //ket noi file .env
require("dotenv").config();

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
//console.log('>>> check env', process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

// A simple SELECT query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
    console.log(">>>results= ", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
