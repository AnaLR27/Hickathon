const pool = require("../../db");
const queries = require("../queries/employee.queries");

const createAbsence = (req, res) => {
  const { id_user, start_date, end_date, status } = req.body;

  pool.query(
    queries.createAbsence,
    [id_user, start_date, end_date, status],
    (error, response) => {
      if (error) {
        console.log("Error creating absence");
        res.status(500).send("Error creating absence");
      } else {
        res.status(201).send("Absence Created Succesfully!");
      }
    }
  );
};

const getAbsenceById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getAbsencesByUserId, [id], (error, response) => {
    if (error) {
      console.log("Error getting absence");
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
        console.error("Error editing absence");
        res.status(500).send("Error editing absence");
      } else {
        res.status(200).json(response.rows);
        console.error("Absence edited succesfully!");
      }
    }
  );
};

const deleteAbsence = (req, res) => {
  const id = parseInt(req.params.id);
  // // verify if absence exist before delete
  pool.query(queries.getAbsencesByAbsenceId, [id], (error, result) => {
    if (result.rows.length === 0) {
      // If absence with the specified ID was not found, return a 404 error
      console.log("Absence not found");
      return res.status(404).json({ message: "Absence not found" });
    } else {
      pool.query(queries.deleteAbsence, [id], (error, response) => {
        if (error) {
          console.error("Error deleting absence from database");
          res.status(500).send("Error deleting absence from database");
        } else {
          res
            .status(200)
            .json({ message: `Absence with ID ${id} has been delete` });
          console.log("Absence deleted successfully");
        }
      });
    }
  });
};

module.exports = {
  getAbsenceById,
  createAbsence,
  editAbsence,
  deleteAbsence,
};
