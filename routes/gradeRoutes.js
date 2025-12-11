// const express = require("express");
// const router = express.Router();
// const gradeController = require("../controllers/gradeController");
// const cache = require("../middleware/cache");
// const rateLimiter = require("../middleware/rateLimiter");

// router.post("/", rateLimiter, gradeController.createGrade);
// router.get("/all", rateLimiter, cache, gradeController.getGrades);
// router.get("/:id", rateLimiter, gradeController.getGrade);
// router.put("/:id", rateLimiter, gradeController.updateGrade);
// router.delete("/:id", rateLimiter, gradeController.deleteGrade);

// module.exports = router;



const express = require("express");
const router = express.Router();
const gradeController = require("../controllers/gradeController");
const cache = require("../middleware/cache");
const rateLimiter = require("../middleware/rateLimiter");
const validate = require("../middleware/validate");

const {createGradeSchema,updateGradeSchema,} = require("../validations/gradeValidation");

router.post( "/",rateLimiter,validate(createGradeSchema),gradeController.createGrade);

router.get("/", rateLimiter, cache, gradeController.getGrades);

router.get("/:id", rateLimiter, gradeController.getGrade);

router.put("/:id", rateLimiter, validate(updateGradeSchema), gradeController.updateGrade);
 
router.delete("/:id", rateLimiter, gradeController.deleteGrade);

module.exports = router;
