const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");

const Student = sequelize.define("Student", {
  name: {
    type: DataTypes.STRING,
  },

  rollno: {
    type: DataTypes.STRING,
    unique: true,
  },

  className: {
    type: DataTypes.STRING,
  },

  fathername: {
    type: DataTypes.STRING,
  },
  
  mothername: {
    type: DataTypes.STRING,
  },

  marks: {
    type: DataTypes.INTEGER,
  },

  grade: {
    type: DataTypes.STRING,
  },
});

module.exports = Student;