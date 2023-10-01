const Course = require("../models/Course.js");
const { multiMongooseToOject } = require("../../util/mongoose.js");

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find()
      .then((courses, err) => {
        res.render("home", {
          courses: multiMongooseToOject(courses),
        });
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
