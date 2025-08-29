const fs = require("fs").promises;
const path = require("path");

class StatsCache {
  constructor(dataPath) {
    this.dataPath = dataPath;
    this.cache = null;
    this.lastModified = null;
    this.isWatching = false;
    this.watcher = null;
  }

  async getStats() {
    try {
      const fileStats = await fs.stat(this.dataPath);
      const currentModified = fileStats.mtime.getTime();

      if (!this.cache || this.lastModified !== currentModified) {
        await this.calculateStats();
        this.lastModified = currentModified;
      }

      return this.cache;
    } catch (error) {
      throw new Error(`Failed to get stats: ${error.message}`);
    }
  }

  async calculateStats() {
    try {
      const raw = await fs.readFile(this.dataPath, "utf8");
      const items = JSON.parse(raw);

      const total = items.length;
      const averagePrice =
        total > 0
          ? items.reduce((acc, cur) => acc + (cur.price || 0), 0) / total
          : 0;

      this.cache = {
        total,
        averagePrice: Math.round(averagePrice * 100) / 100, // Round to 2 decimal places
        lastCalculated: new Date().toISOString(),
        itemCount: total,
      };
    } catch (error) {
      throw new Error(`Failed to calculate stats: ${error.message}`);
    }
  }

  startFileWatching() {
    if (this.isWatching) return;

    try {
      this.watcher = fs.watch(this.dataPath, (eventType) => {
        if (eventType === "change") {
          this.invalidateCache();
        }
      });

      this.isWatching = true;
    } catch (error) {
      console.warn(`Failed to start file watching: ${error.message}`);
    }
  }

  stopFileWatching() {
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
      this.isWatching = false;
    }
  }

  invalidateCache() {
    this.cache = null;
    this.lastModified = null;
  }
  getCacheInfo() {
    return {
      isCached: !!this.cache,
      lastModified: this.lastModified,
      isWatching: this.isWatching,
      lastCalculated: this.cache?.lastCalculated || null,
    };
  }
}

module.exports = StatsCache;
