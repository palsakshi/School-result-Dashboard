const Students= require("../models/Students");

// Create user
exports.createStudent = async (req, res) => {
  try {
    const student = await Students.create(req.body);
    console.log('Is backend connected with frontend')
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
exports.getStudents = async (req, res) => {
  try {
    const Student = await Students.findAll();
    res.json(Student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};