const express = require("express");
const router = express.Router();
const getInTouchController = require("../controllers/getInTouch");

router.post(
  "/",
  getInTouchController.applyRateLimit,
  getInTouchController.getInTouch
);

module.exports = router;
