const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HistorySchema = new Schema({
  userID: {
    type: String
  },
  weatherList: {
    type: Array
  },
  city: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = History = mongoose.model("History", HistorySchema);
