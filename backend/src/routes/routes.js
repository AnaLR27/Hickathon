const { Router } = require("express");
const router = Router();

const userController = require("../controllers/users.cotroller");

// employee
// crear vacacion
// router.post("/create", controller.create);
//ver todas las vacaciones
// editar vacacion
// delete vacacion
// router.get("/list", controller.list);

// ROUTES MANAGER
// view users
router.get("/users", userController.getUsers);

// add user
router.post("/users", userController.createUser);

// edit user
router.put("/users/:id", userController.editUser);

// delete user
router.delete("/users/:id", userController.deleteUser);

// ROUTES EMPLOYEE
// review absences requests
// router.get("/absences", userController.getAbsences);

router.get("/user/:id", userController.getUserById);

module.exports = router;
