require("dotenv").config();

const google = require("googleapis").google;
const customSearch = google.customsearch("v1");
const googleSearchCredentials = {cseId: process.env.cseId, apiKey: process.env.apiKey}

async function googleImage({ query, nums, size, pagination, safe, imageType }, actualPage) {
  const res = await customSearch.cse.list({
    auth: googleSearchCredentials.cseId,
    cx: googleSearchCredentials.apiKey,
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
          title: `${image.title.slice(0,35)}.${image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1) ? image.fileFormat.substring(image.fileFormat.lastIndexOf("/")+1) : 'jpg'}`,
          image: image.link,
          detail: image.image,
        };
      }),
    };
  }
module.exports = googleImage;
