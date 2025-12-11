const gradeService = require("../services/gradeService");
const redisClient = require("../config/redis");


// Get Grades with Filters
exports.getGrades = async (req, res) => {
  try {
    const grades = await gradeService.getGrades(req.query);

    // Save to Redis (cache for 60 sec)
    if (req.redisKey) {
      await redisClient.set(req.redisKey, JSON.stringify(grades), {
        EX: 60,
      });
    }

    res.status(200).json({ success: true, fromCache: false, data: grades });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Student Grade
exports.getGrade = async (req, res) => {
  try {
    const grade = await gradeService.getGradeById(req.params.id);
    if (!grade)
      return res.status(404).json({ success: false, message: "Not found" });

    res.status(200).json({ success: true, data: grade });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Grade
exports.createGrade = async (req, res) => {
  try {
    const grade = await gradeService.createGrade(req.body);
    res.status(201).json({ success: true, data: grade });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Update Grade
exports.updateGrade = async (req, res) => {
  try {
    const grade = await gradeService.updateGrade(req.params.id, req.body);
    res.status(200).json({ success: true, data: grade });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Grade
exports.deleteGrade = async (req, res) => {
  try {
    await gradeService.deleteGrade(req.params.id);
    res.status(200).json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
