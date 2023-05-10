const getAbsencesByUserId = "SELECT * FROM absences WHERE id_user = $1";
const getAbsencesByAbsenceId = "SELECT * FROM absences WHERE id = $1";
const createAbsence =
  "INSERT INTO absences (id_user, start_date, end_date, status) VALUES ($1, $2, $3, $4);";
const editAbsence =
  "UPDATE absences SET start_date=$2, end_date=$3, status=$4 WHERE id_user = $1 AND id=$5 RETURNING *";
const deleteAbsence = "DELETE FROM absences WHERE id = $1";

module.exports = {
  getAbsencesByUserId,
  getAbsencesByAbsenceId,
  createAbsence,
  editAbsence,
  deleteAbsence,
};
