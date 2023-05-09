const pool = require("../../db");
const queries = require("../queries/employee.queries");

const createAbsence = (req, res) => {
  const { id_user, start_date, end_date, status } = req.body;

  pool.query(
    queries.createAbsence,
    [id_user, start_date, end_date, status],
    (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error creating user");
      } else {
        res.status(201).send("Absence Created Succesfully!");
      }
    }
  );
};

const getAbsenceById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getAbsencesById, [id], (error, response) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error getting absence");
    } else {
      res.status(200).json(response.rows);
    }
  });
};

const editAbsence = (req, res) => {
  const id = parseInt(req.params.id);
  const id_user = parseInt(req.params.id_user);
  const { start_date, end_date, status } = req.body;

  pool.query(
    queries.editAbsence,
    [id_user, start_date, end_date, status, id],
    (error, response) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error editing user");
      } else {
        res.status(200).json(response.rows);
        console.error("Absence edited succesfully!");
      }
    }
  );
};

const deleteAbsence = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteAbsence, [id], (error, response) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error deleting user");
    } else {
      res.status(200).json({ message: `User with ID ${id} has been delete` });
      console.log("Absence deleted successfully");
    }
  });
};

module.exports = {
  getAbsenceById,
  createAbsence,
  editAbsence,
  deleteAbsence,
};
