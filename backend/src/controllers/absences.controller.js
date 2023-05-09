const pool = require("../../db");
const queries = require("../queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, response) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error getting users");
    } else {
      res.status(200).json(response.rows);
    }
  });
};

//no se ha pedido
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, response) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error getting user");
    } else {
      res.status(200).json(response.rows);
    }
  });
};

const createUser = (req, res) => {
  const { name, email, password, role, number_absences } = req.body;

  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, response) => {
    if (response.rows.length) {
      res.send("Email already exists.");
    } else {
      //add user to db
      pool.query(
        queries.createUser,
        [name, email, password, role, number_absences],
        (error, response) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error creating user");
          } else {
            res.status(201).send("Student Created Succesfully!");
          }
        }
      );
    }
  });
};

const editUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, password, role, number_absences } = req.body;

  pool.query(
    queries.editUser,
    [name, email, password, role, number_absences, id],
    (error, response) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error editing user");
      } else {
        res.status(200).json(response.rows);
        console.error("Student edited succesfully!");
      }
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteUser, [id], (error, response) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error deleting user");
    } else {
      res.status(200).json({ message: `User with ID ${id} has been delete` });
      console.log("User deleted successfully");
    }
  });
};

//  const { start_date, end_date, status } = req.body;

module.exports = {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
