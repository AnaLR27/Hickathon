const getUsers = "SELECT * FROM users";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const createUser =
  "INSERT INTO users (name, email, password, role, number_absences) VALUES ($1, $2, $3, $4, $5);";
const editUser =
  "UPDATE users SET name = $1, email=$2, password=$3, role=$4, number_absences=$5 WHERE id=$6 RETURNING *";
const deleteUser = "DELETE FROM users WHERE id = $1";

module.exports = {
  getUsers,
  checkEmailExists,
  createUser,
  editUser,
  deleteUser
};
