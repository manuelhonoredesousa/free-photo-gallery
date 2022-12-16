const $searchTxt = document.querySelector("#searchTxt");

$searchTxt.onkeypress = (event) => enterPressed(event);


function enterPressed(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const isInIndexPage = window.document.title == 'Free Photo Gallery';
    if(isInIndexPage) searchingFor(1);
    else searchingFor();
  }
}

function searchingFor(pageIN) {
  const originURL = `${window.location.origin}/image`;
  const isIndexPage = parseInt(pageIN) === 1 ? true : false
  
  if (isIndexPage) {
    window.location.href = `${originURL}?search=${$searchTxt.value}&typeOfImage=${getSelectOption().type}&quality=${getSelectOption().quality}&startIndex=1`;
  }else{
    const searchParam = new URLSearchParams(window.location.search)
    const typeImg_ = searchParam.get("typeOfImage");
    const quality_ = searchParam.get("quality");
    window.location.href = `${originURL}?search=${$searchTxt.value}&typeOfImage=${typeImg_}&quality=${quality_}&startIndex=1`    
  }
}