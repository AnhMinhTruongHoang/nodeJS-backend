const connection = require("../config/dataBase");
////////////////
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const createNewUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );

  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

const updateUserById = async (email, city, name, userId) => {
  let [results, fields] = await connection.query(
    `
    UPDATE Users
    SET email = ?, city = ?, name = ?
    WHERE id = ?
    `,
    [email, city, name, userId]
  );
};

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users where id = ?
    
    `,
    [userId]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
};
