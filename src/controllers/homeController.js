const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    console.log("check rows: ", results);
    return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
    res.send("Check ABC");
};

const getPresent111 = (req, res) => {
    //res.send('<h1>Present111</h1>')
    res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, // Add a comma after this line
    //     [email, name, city],
    //     function (err, results) {
    //         if (err) {
    //             console.error(err);
    //             return res.status(500).send('An error occurred while creating the user');
    //         }
    //         console.log(results);
    //         res.send('User created successfully');
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, // Add a comma after this line
        [email, name, city]
    );

    console.log(">>>check results: ", results);
    res.send("User created successfully");
};

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // console.log(">>> check req.params: ", req.params, userId); //>>> check req.params:  { id: '1' } - string nha

    let user = await getUserById(userId);
    res.render("edit.ejs", { userEdit: user }); // userEdit là user truyền qua view, còn user là biến user ở trên
};

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId);

    // res.send('Update user succeed');
    res.redirect("/");
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render("delete.ejs", { userDelete: user });
};

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId; // lấy theo thuộc tính name
    await deleteUserById(id);
    res.redirect("/");
};

module.exports = {
    getHomepage,
    getABC,
    getPresent111,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser,
};
