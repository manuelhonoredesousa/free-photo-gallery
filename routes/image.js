const express = require("express");
const router = express.Router();
const google_images = require("../modules/google_images");

router.get("/", function (req, res, next) {
  const { search, startIndex, typeOfImage, quality } = req.query;
  // console.log("🚀 ~ file: image.js:8 ~ quality", quality)
  // console.log("🚀 ~ file: image.js:8 ~ typeOfImage", typeOfImage)
  // console.log("🚀 ~ file: image.js:8 ~ startIndex", startIndex)
  // console.log("🚀 ~ file: image.js:8 ~ search", search)
  const srchNum = 10;
  const secure = 'off'

  if (search && startIndex) {
    const actualPage = parseInt(startIndex)
    const startLookingAtIndex = actualPage == 1 ? 1 : (actualPage-1)*(srchNum+1)
    
    google_images({ query: search, nums: srchNum, size: quality, pagination: startLookingAtIndex, safe: secure, imageType:typeOfImage }, actualPage)
      .then((data) => res.render("image", { title: "Search Page:", search, data }))
      .catch((err) => res.render("error", { error: { status: 500 }, message: "Sorry, we're having trouble searching, try searching differently or using keywords. Or it could also be that the google API unfortunately hit the daily search limit (considering it's free)" }));
      
  } else res.render("error", { error: { status: 500 }, message: "You have to search something on home page to show the image that you want... and do not change nothing on url space" });
});

module.exports = router;
