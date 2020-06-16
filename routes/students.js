var express = require("express");
var router = express.Router();
const { Campus, Student } = require("../database/models");


/* GET all students. */
// /api/students
router.get("/", async (req, res, next) => {
  // try to get students object from database
  try {
    // students will be the result of the student.findAll promise
    const students = await Student.findAll({ include: Campus });

    // if students is valid, it will be sent as a json response
    console.log(students);
    res.status(200).json(students);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});
// Route to serve single student based on its id
// /api/students/:id
// /api/students/456 would respond with a student with id 456
router.get("/:id", async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  // query the database for a student with matching id
  try {
    // if successful:
    const student = await Student.findByPk(id, { include: Campus });
    // send back the student as a response
    res.status(200).json(student);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});
// Route to get students associated with a student
// /api/students/:id/students
// /api/students/456/students
router.get("/:id/campus", async (req, res, next) => {
  const { id } = req.params;
  // find the student associated with the id
  let foundstudent;
  try {
    foundstudent = await Student.findByPk(id);
  } catch (err) {
    next(err);
  }

  try {
    const studentscampus = await foundstudent.getCampus();
    res.status(200).json(studentscampus);
  } catch (err) {
    next(err);
  }

  // find the students associated with the student
  // send back an array of students
});

// Route to handle adding a student
// /api/students/
router.post("/", async (req, res, next) => {
    console.log(req.body);
  // Take the form data from the request body
  const { firstName,lastName,email,imageUrl,gpa } = req.body;
  // Create a student object
  const studentObj = {
    firstName: firstName,
    lastName: lastName,
    email:email,
    imageUrl:imageUrl,
    gpa:gpa,

  };
  try {
    // Create a new student on the database
    const newstudent = await Student.create(studentObj);
    // The database would return a student
    // send that student as a json to the client
    res.status(201).send(newstudent);
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updatedObj = { ...req.body };
  try {
    const student = await Student.findByPk(id);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    res.status(201).send(updatedStudent);
  } catch (err) {
    next(err);
  }
});

// Route to handle removing a student
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for a student to delete
  try {
    // pass the id to the database to find student to be deleted
    // database would either respond succcess or fail
    const student = await Student.findByPk(id);
    // invoke the .destroy() method on the returned student
    await student.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {

    next(err);
  }
});

module.exports = router;
