const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  totalScore: {
    type: Number,
    default: 0,
  },
  totalAnswers: {
    type: Number,
    default: 0,
  },
  correctAnswers: {
    type: Number,
    default: 0,
  },
  inCorrectAnswers: {
    type: Number,
    default: 0,
  },
  attendedDestinations: [
    {
      type: Number,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
