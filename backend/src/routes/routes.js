const { Router } = require("express");
const router = Router();

const controller = require("../controllers/users.cotroller");

router.get("/users", controller.getUsers);
router.get("/user/:id", controller.getUserById);
// router.post("/users", createUser);

module.exports = router;
