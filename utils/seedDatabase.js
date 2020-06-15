const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({ firstName: "Daniel", lastName: "Tao",email:"Daniel@gmail.com"}),
    Student.create({ firstName: "Sally", lastName: "Chen",email:"chen@gmail.com", campusId: 1,gpa:3.4}),
    Student.create({ firstName: "Annie", lastName: "Chen",email:"chenye@gmail.com", campusId: 1 }),
    Student.create({ firstName: "Leon", lastName: "Xin",email:"Leon@gmail.com", campusId: 2, gpa:3.2}),
  ]);
};

module.exports = seedDatabase;
