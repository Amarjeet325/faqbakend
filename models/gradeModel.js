const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    profileImage: { type: String }, // for image URL
    class: { type: String, required: true },
    subject: { type: String, required: true },
    marks: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Grade", gradeSchema);
