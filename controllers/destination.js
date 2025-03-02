const { OpenAI } = require("openai");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../middlewares/errorHandler");
const fs = require("fs");
const { jsonData } = require("../config/destinationData");

const destinationData = catchAsyncErrors(async (req, res, next) => {
  try {
    const { number } = req.query;
    const destinationClues = jsonData[number - 1].clues;
    const destinationOptions = jsonData[number - 1].options;

    res.json({
      success: true,
      destinationClues,
      destinationOptions,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
});

const findDestinationFunFacts = catchAsyncErrors(async (req, res, next) => {
  try {
    const { destinationId } = req.query;
    const destinationFunFacts = jsonData[destinationId - 1].fun_fact;
    const destinationTrivias = jsonData[destinationId - 1].trivia;

    res.json({
      success: true,
      destinationFunFacts,
      destinationTrivias,
    });
  } catch (error) {
    return next(new ErrorHandler(error));
  }
});
module.exports = {
  destinationData,
  findDestinationFunFacts,
};
