const express = require("express");
const router = express.Router();
const {
  userRegistraion,
  submitAnswer,
  userDetails,
  destinationNumbers,
} = require("../controllers/user");

router.route("/registration").post(userRegistraion);
router.route("/submit-answer").post(submitAnswer);
router.route("/user-details").get(userDetails);
router.route("/destination-numbers").get(destinationNumbers);

module.exports = router;
