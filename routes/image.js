const express = require("express");
const router = express.Router();
const google_images = require("../modules/google_images");
const test = require("../src/test");

router.get("/", function (req, res, next) {
  const { search } = req.query;
  const srchNum = 10;
  const quality = "huge";
  const data = test
  if (search) {
    res.render("image", { title: "Search Page:", search, data })
    // console.log(search);
    // google_images({ query: search, nums: srchNum, size: quality })
      // .then((data) => res.render("image", { title: "Search Page:", search, data }))
      // .catch((err) => res.render("error", { error: { status: 500 }, message: "Sorry, the connection may not be good, or an unknown error occurred while doing the search, please try again..." }));
  } else res.render("error", { error: { status: 500 }, message: "You have to search something on home page to show the image that you want..." });
});

module.exports = router;
