const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(">> This is a GET INDEX");
  res.render("index", { title: "Free Photo Gallery"});
});

module.exports = router;
