const { Router } = require("express");
const router = Router();

const absencesController = require("../controllers/employee.controller");

// ROUTES EMPLOYEE
// view absences request (id)
router.get("/absences/:id", absencesController.getAbsenceById);

// create absence
router.post("/absences/:id", absencesController.createAbsence);

// edit absence
router.put("/absences/:id_user/:id", absencesController.editAbsence);

// delete absence
router.delete("/absences/:id", absencesController.deleteAbsence);

module.exports = router;
