const Grade = require("../models/gradeModel");

exports.createGrade = (data) => Grade.create(data);

exports.getGrades = async (query) => {
  let filter = {};

  if (query.name) {
    filter.name = { $regex: query.name, $options: "i" };
  }

  if (query.class) {
    filter.class = query.class;
  }

  if (query.subject) {
    filter.subject = query.subject;
  }

  return await Grade.find(filter);
};

exports.getGradeById = (id) => Grade.findById(id);

exports.updateGrade = (id, data) =>
  Grade.findByIdAndUpdate(id, data, { new: true });

exports.deleteGrade = (id) => Grade.findByIdAndDelete(id);
