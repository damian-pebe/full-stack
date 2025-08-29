const express = require("express");
const path = require("path");
const StatsCache = require("../utils/StatsCache");
const router = express.Router();

const DATA_PATH = path.join(__dirname, "../../../data/items.json");
const statsCache = new StatsCache(DATA_PATH);

// Start file watching for automatic cache invalidation
statsCache.startFileWatching();

// GET /api/stats
router.get("/", async (req, res, next) => {
  try {
    const stats = await statsCache.getStats();
    res.json(stats);
  } catch (err) {
    next(err);
  }
});

// GET /api/stats/cache-info (for debugging/monitoring)
router.get("/cache-info", (req, res) => {
  const cacheInfo = statsCache.getCacheInfo();
  res.json(cacheInfo);
});

module.exports = router;
