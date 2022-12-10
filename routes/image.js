const express = require("express");
const router = express.Router();
const google_images = require("../modules/google_images");
// let test = require("../src/test_1");

router.get("/", function (req, res, next) {
  const { search, startIndex } = req.query;
  const srchNum = 10;
  const quality = "huge";
  
  if (search && startIndex) {
    const actualPage = parseInt(startIndex)
    const startLookingAtIndex = actualPage == 1 ? 1 : (actualPage-1)*(srchNum+1)
    // let data = test
    // data.searchInformation.actualPage = actualPage
    // res.render("image", { title: "Search Page:", search, data })

    google_images({ query: search, nums: srchNum, size: quality, pagination: startLookingAtIndex }, actualPage)
      .then((data) => res.render("image", { title: "Search Page:", search, data }))
      .catch((err) => res.render("error", { error: { status: 500 }, message: "Sorry, we have a search problem, possibly the google API has unfortunately reached the daily search limit (considering it's free)" }));
      
  } else res.render("error", { error: { status: 500 }, message: "You have to search something on home page to show the image that you want... and do not change nothing on url space" });
});

module.exports = router;
