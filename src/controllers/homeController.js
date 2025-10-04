const connection = require("../config/database");
const getHomepage = (req, res) => {
    let users = [];

    // A simple SELECT query
    connection.query("SELECT * FROM Users u", function (err, results, fields) {
        users = results;
        console.log(">>>results home page = ", results); // results contains rows returned by server

        console.log(">>check users: ", users);
        res.send(JSON.stringify(users));
    });
};

const getABC = (req, res) => {
    res.send("Check ABC");
};

const getPresent111 = (req, res) => {
    //res.send('<h1>Present111</h1>')
    res.render("sample.ejs");
};

module.exports = {
    getHomepage,
    getABC,
    getPresent111,
};
