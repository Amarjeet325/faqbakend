const Joi = require("joi");

const createGradeSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  profileImage: Joi.string().uri().optional(),
  class: Joi.string().required(),
  subject: Joi.string().required(),
  marks: Joi.number().min(0).max(100).required(),
});

const updateGradeSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  profileImage: Joi.string().uri().optional(),
  class: Joi.string().optional(),
  subject: Joi.string().optional(),
  marks: Joi.number().min(0).max(100).optional(),
});

module.exports = {
  createGradeSchema,
  updateGradeSchema,
};
