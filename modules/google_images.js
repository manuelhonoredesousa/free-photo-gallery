const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
const googleSearchCredentials = require("../json/google_image.json");

async function googleImage({ query, nums, size }) {
    const res = await customSearch.cse.list({
      auth: googleSearchCredentials.apiKey,
      cx: googleSearchCredentials.seachEngineId,
      q: query, //Search Text
      searchType: "image",
      imgSize: size, //valid intput: "huge",
      num: nums, // number of results you want to get
    });
    return {
      searchInformation: {
        searchTime: res.data.searchInformation.searchTime,
        formattedSearchTime: res.data.searchInformation.formattedSearchTime,
        totalResults: res.data.searchInformation.totalResults,
        formattedTotalResults: res.data.searchInformation.formattedTotalResults,
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

module.exports = googleImage;
