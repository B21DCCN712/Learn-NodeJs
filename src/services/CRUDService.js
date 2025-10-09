const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query("Select * from Users");
    // nếu không có keyword await thì connection.query("select * from Users") nó sẽ trả về một Promise { <pending> } có nghĩa là đang chờ mà (mà promise đại diện cho 1 giá trị chưa xác định)
    // let [results, fields] = Promise { <pending> } => Promise ở đây chưa xác định mà cố truy cập vào bằng cách gán results, fields => ko có giá trị để gán => undefined
    console.log(">>> check data: ", connection.query("select * from Users"));
    return results;
};

const getUserById = async (userId) => {
    let [results] = await connection.query("SELECT * FROM Users WHERE id = ?", [
        userId,
    ]);
    // console.log(">>> check results= ", results);

    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `
        UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE id  = ?
        `,
        [email, name, city, userId]
    );
};


const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM Users WHERE id = ?', [id]
    );
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};
