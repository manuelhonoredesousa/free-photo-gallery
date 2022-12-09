const express = require('express');
const router = express.Router();
const path = require('node:path')


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.download(path.join(__dirname, "../", "public", 'bg.jpg'))
  res.download('hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg')
});

module.exports = router;
