let HistoryController = require("../controllers/history.controller");

module.exports = function(app) {
  app.post("/api/history", HistoryController.getUserHistory);
};
