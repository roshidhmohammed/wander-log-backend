const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../middlewares/errorHandler");
const User = require("../model/user");
const { jsonData } = require("../config/destinationData");

const userRegistraion = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name: name.toLowerCase() });
    if (!user) {
      await User.create({
        name,
      });
      const newUser = await User.find({ name: name });
      const newUserId = newUser[0]._id;
      res.status(201).json({
        success: true,
        newUserId,
        message: "Registration successful",
      });
    } else {
      res.status(409).json({
        success: false,
        message: "User with this name already exists",
      });
    }
  } catch (error) {
    return next(new ErrorHandler("internal server error", 500));
  }
});

const submitAnswer = catchAsyncErrors(async (req, res, next) => {
  try {
    const { number, selectedOption, userId } = req.body;
    const currentUser = await User.findById(userId);
    const selectedDestination = jsonData[number - 1];
    let currentTotalScore = currentUser.totalScore;
    let currentCorrectAnswers = currentUser.correctAnswers;
    let currentInCorrectAnswers = currentUser.inCorrectAnswers;
    let totalAnswers = currentUser.totalAnswers + 1;

    if (!currentUser) {
      return next(new ErrorHandler("user not found", 404));
    }
    let isCorrect =
      selectedOption.toLowerCase() === selectedDestination.city.toLowerCase();
    if (isCorrect) {
      currentTotalScore += 10;
      currentCorrectAnswers += 1;
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            totalScore: currentTotalScore,
            totalAnswers: totalAnswers,
            correctAnswers: currentCorrectAnswers,
            inCorrectAnswers: currentInCorrectAnswers,
          },
          $push: {
            attendedDestinations: number - 1,
          },
        }
      );
      res.status(201).json({
        success: true,
        message: "Your answer is correct",
      });
    } else {
      currentInCorrectAnswers += 1;
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            totalScore: currentTotalScore,
            totalAnswers: totalAnswers,
            correctAnswers: currentCorrectAnswers,
            inCorrectAnswers: currentInCorrectAnswers,
          },
          $push: {
            attendedDestinations: number - 1,
          },
        }
      );

      res.status(201).json({
        success: false,
        message: "Your answer is incorrect. Please try again.",
      });
    }
  } catch (error) {
    return next(new ErrorHandler("internal server error", 500));
  }
});

const userDetails = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId } = req.query;
    const user = await User.findById(userId);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler("internal server error", 500));
  }
});

const destinationNumbers = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId } = req.query;
    const user = await User.findById(userId);
    const attendedDestination = user?.attendedDestinations;
    res.status(200).json({
      success: true,
      attendedDestination,
    });
  } catch (error) {
    return next(new ErrorHandler("Internal server error", 500));
  }
});

module.exports = {
  userRegistraion,
  submitAnswer,
  userDetails,
  destinationNumbers,
};
