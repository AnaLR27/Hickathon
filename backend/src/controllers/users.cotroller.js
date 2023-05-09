const pool = require("../../db");
const queries = require("../queries");

const getUsers = async (req, res) => {
  pool.query(queries.getUsers, (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, response) => {
    if (error) throw error;
    res.status(200).json(response.rows);
  });
};

const createUser = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  res.status(200).json(response.rows);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
