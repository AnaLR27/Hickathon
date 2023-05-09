const { Router } = require("express");
const router = Router();

const { getUsers, createUser } = require("../controllers/users.cotroller");

router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = router;
