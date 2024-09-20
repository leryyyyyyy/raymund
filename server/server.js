require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());

// Your routes
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/getInTouch", require("./routes/getInTouchRoutes"));
app.use("/api/quotation", require("./routes/quotationRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
