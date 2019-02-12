let HistoryController = require("../controllers/History");

module.exports = function(app) {
  app.post("/api/history", HistoryController.getUserHistory);
};
