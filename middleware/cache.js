const redisClient = require("../config/redis");

module.exports = async (req, res, next) => {
  try {
    const key = `grades:${JSON.stringify(req.query)}`;

    const cachedData = await redisClient.get(key);

    if (cachedData) {
      return res.status(200).json({success: true,fromCache: true, data: JSON.parse(cachedData), });
    }

    req.redisKey = key;
    next();
  } catch (error) {
    next(); // If Redis fails, continue without caching
  }
};
