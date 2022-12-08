function page(contents, numberOfContentOnPage) {
  const contentsLength = contents.length;
  const numberOfPages = contentsLength / numberOfContentOnPage;
  const myPages = [];

  let whereItStoped = 0;
  for (let i = 0; i < numberOfPages; i++) {
    myPages.push([]);
    for (let j = 0; j < numberOfContentOnPage; j++) {
      if (contents[whereItStoped]) {
        myPages[i].push(contents[whereItStoped]);
        whereItStoped++;
      }
    }
  }
  return { pages: myPages.length, content: myPages };
}
module.exports = page;


