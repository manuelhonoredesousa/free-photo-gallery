const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
// const googleSearchCredentials = {apiKey: process.env.apiKey, seachEngineId: process.env.seachEngineId}
const googleSearchCredentials = require("./../src/apiKey.json")

async function googleImage({ query, nums, size, pagination }, actualPage) {
  // console.log(`>> Searching '${query}' <<`);
  const res = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.seachEngineId,
    q: query, //Search Text
    searchType: "image",
    imgSize: size, //valid intput: "huge",
    num: nums, // number of results you want to get
    // page: pagination
    // previousPage:
    // nextPage:3
    start:pagination
  });
  ;
  // console.log(res.data.queries);
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
          title: image.title,
          fileFormat: image.fileFormat.split("/")[image.fileFormat.split("/").length - 1],
          image: image.link,
          detail: image.image,
        };
      }),
    };
  }

  // googleImage({ query: "migos", nums: 10, size: 'huge' })
module.exports = googleImage;
