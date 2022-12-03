const express = require("express");
const router = express.Router();
const google_images = require("./../modules/google_images")
const test = require("./../json/test")
/* GET home page. */
router.get("/", async function (req, res, next) {
  // const data = await google_images({query: "Mustang",nums: 3,size: "huge"});
  const data = test
  res.render("index", { title: "Free Photo Gallery", data });
});

module.exports = router;
