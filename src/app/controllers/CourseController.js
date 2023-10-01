const Course = require("../models/Course");
const { mongooseToOject } = require("../../util/mongoose");

class CourseController {
  //[GET] /courses:slug
  show(req, res, next) {
    // res.send('detail course' + req.params.slug);

    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        return res.render("courses/show", {
          course: mongooseToOject(course),
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData);
    course.save();

    res.send("Course SAVED")
  }
}

module.exports = new CourseController();
