const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
    level: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
