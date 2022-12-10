const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
// const googleSearchCredentials = {apiKey: process.env.apiKey, seachEngineId: process.env.seachEngineId}
const googleSearchCredentials = require("./../src/apiKey.json")

async function googleImage({ query, nums, size, pagination }, actualPage) {
  const res = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.seachEngineId,
    q: query, //Search Text
    searchType: "image",
    imgSize: size, //valid intput: "huge",
    num: nums, // number of results you want to get
    start:pagination
  });
  ;
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
          title: `${image.title.slice(0,35)}.${image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1) ? image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1) : jpg}`,
          // fileFormat: image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1),
          // fileFormat: image.fileFormat.split("/")[image.fileFormat.split("/").length - 1],
          image: image.link,
          detail: image.image,
        };
      }),
    };
  }
module.exports = googleImage;
