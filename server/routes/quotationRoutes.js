const express = require("express");
const router = express.Router();
const Quotation = require("../controllers/quotation");

router.post("/", Quotation.applyRateLimit, Quotation.quotation);

module.exports = router;
