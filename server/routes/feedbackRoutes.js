const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback");

// Apply rate limiting middleware to feedback route
router.post(
  "/",
  feedbackController.applyRateLimit, // Apply rate limiting middleware
  feedbackController.feedback // Controller function
);

module.exports = router;
