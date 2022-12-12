require("dotenv").config();

const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
const googleSearchCredentials = {apiKey: process.env.apiKey, seachEngineId: process.env.seachEngineId}
// const googleSearchCredentials = require("./../src/apiKey.json")
async function googleImage({ query, nums, size, pagination, safe, imageType }, actualPage) {
  const res = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.seachEngineId,
    q: query, 
    searchType: "image",
    imgSize: size, 
    num: nums, 
    start:pagination,
    safe:safe,
    imgType: imageType,
  });
    return {
      searchInformation: {
        searchTime: res.data.searchInformation.searchTime,
        formattedSearchTime: res.data.searchInformation.formattedSearchTime,
        totalResults: res.data.searchInformation.totalResults,
        formattedTotalResults: res.data.searchInformation.formattedTotalResults,
        actualPage: actualPage
      },
      data: res.data.items.map((image) => {
        return {
          // image.alt.slice(0,40)+'...'
          title: `${image.title.slice(0,35)}.${image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1) ? image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1) : 'jpg'}`,
          // fileFormat: image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1),
          // fileFormat: image.fileFormat.split("/")[image.fileFormat.split("/").length - 1],
          image: image.link,
          detail: image.image,
        };
      }),
    };
  }
  // const search = 'cars' 
  // const startIndex = '1' 
  // const typeOfImage = 'photo' 
  // const quality = 'MEDIUM' 
// 
  // const srchNum = 10;
  // const secure = 'off'
  // const actualPage = parseInt(startIndex)
  // const startLookingAtIndex = actualPage == 1 ? 1 : (actualPage-1)*(srchNum+1)
    // 
  // googleImage({ query: search, nums: srchNum, size: quality, pagination: startLookingAtIndex, safe: secure, imageType:typeOfImage }, actualPage)
      // .then((data) => console.log(data))
      // .catch((err) => console.log("error ->> \n",err ));
  
module.exports = googleImage;
