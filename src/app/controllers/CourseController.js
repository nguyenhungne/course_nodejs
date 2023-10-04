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

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.findOne({ id: req.params.id}, req.body)
      .then ( () => res.redirect("/me/stored/courses") )
      .catch (next)
  }   

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render("courses/edit",{
        course: mongooseToOject(course)
      }))
      .catch(next);
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next);
  }


  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData);
    course.save()
      .then(() => res.redirect("/"))
      .catch(next);

  }
}

module.exports = new CourseController();
