const express = require("express");
const router = express.Router();
const {
  destinationData,
  findDestinationFunFacts,
} = require("../controllers/destination");

router.route("/destination-data").get(destinationData);
router.route("/destination-fun-facts").get(findDestinationFunFacts);

module.exports = router;
