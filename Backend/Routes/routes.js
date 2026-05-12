const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/controller");

router.post("/", StudentController.createStudent);
router.get("/", StudentController.getStudents);

module.exports = router;