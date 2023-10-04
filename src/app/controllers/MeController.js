const Course = require("../models/Course");
const { multiMongooseToOject } = require("../../util/mongoose");

class MeController {

  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then (courses => res.render("me/stored-courses", {
        courses: multiMongooseToOject(courses)
      }))
  }
}

module.exports = new MeController();
