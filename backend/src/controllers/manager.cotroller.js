const pool = require("../../db");
const queries = require("../queries/manager.queries");

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
            res.status(201).send("User Created Succesfully!");
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
        console.error("User edited succesfully!");
      }
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  // verify if user exist before delete
  pool.query(queries.getUserById, [id], (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Error deleting user from database" });
    } else if (result.rows.length === 0) {
      // If user with the specified ID was not found, return a 404 error
      return res.status(404).json({ message: "User not found" });
    } else {
      pool.query(queries.deleteUser, [id], (error, response) => {
        res.status(200).json({ message: `User with ID ${id} has been delete` });
        console.log("User deleted successfully");
      });
    }
  });
};

const getAbsences = (req, res) => {
  pool.query(queries.getAbsences, (error, response) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error getting users");
    } else {
      res.status(200).json(response.rows);
    }
  });
};

module.exports = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
  getAbsences,
};
