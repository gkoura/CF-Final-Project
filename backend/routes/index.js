const express = require("express");
const router = express.Router();

// Define your routes
router.get("/example", (req, res) => {
  res.json({ message: "Example route works!" });
});

module.exports = router;
