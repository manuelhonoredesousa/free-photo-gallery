const express = require("express");
const router = express.Router();
const google_images = require("../modules/google_images")
const test = require("../json/test")

router.get("/", function (req, res, next) {
  const {search} = req.query
  // const data = await google_images({query: search,nums: 3,size: "huge"});
  const data = test
  if(search) res.render("image", { title: "Search Page:", search, data})
  else res.render("error", {error:{status:500}, message: 'You have to search something on home page to show the image that you want...'})
});

module.exports = router;
