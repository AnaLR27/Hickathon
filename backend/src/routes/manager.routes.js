const { Router } = require("express");
const router = Router();

const managerController = require("../controllers/manager.cotroller");


// ROUTES MANAGER
// view users
router.get("/users", managerController.getUsers);

// add user
router.post("/users", managerController.createUser);

// edit user
router.put("/users/:id", managerController.editUser);

// delete user
router.delete("/users/:id", managerController.deleteUser);

module.exports = router;
