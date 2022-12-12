const $searchTxt = document.querySelector("#searchTxt");
const $imgResolution = document.querySelector("#resolution");
const $imgType = document.querySelector("#imageType");

$searchTxt.onkeypress = (event) => enterPressed(event);

function enterPressed(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchingFor();
  }
}
function onChangeSelect(e) {
  const selectedOption = e.srcElement.value;
  const id = e.target.id;
  const isThisResolutionOption = id == "resolution";

  if (isThisResolutionOption) setSelectOption(selectedOption, "quality", 1);
  else setSelectOption(selectedOption, "typeOfImage", 2);
}
function getSelectOption() {
  const isQualitySet = localStorage.getItem("quality");
  const isImageTypeSet = localStorage.getItem("typeOfImage");
  const isIndexPage = window.document.title == 'Free Photo Gallery' ? true : false

  if(!isQualitySet && !isImageTypeSet) {
    setSelectOption("LARGE", "quality", 1);
    setSelectOption("photo", "typeOfImage", 2);
  }

  setSelectTag(isQualitySet, isImageTypeSet,isIndexPage);
  return {type:isImageTypeSet, quality:isQualitySet};
}
function setSelectTag(quality, type, state) {
  if(state){
    Array.from($imgResolution).forEach((element) => {
      if (element.value == quality) element.selected = true;
    });
    Array.from($imgType).forEach((element) => {
      if (element.value == type) element.selected = true;
    });
  }
}
function setSelectOption(selectedOption, option, id) {
  if (id == 1) {
    localStorage.setItem(option, selectedOption);
  } else {
    localStorage.setItem(option, selectedOption);
  }
}
function searchingFor() {
  const originURL = window.location.origin;
  window.location.href = `${originURL}/image?search=${$searchTxt.value}&typeOfImage=${getSelectOption().type}&quality=${getSelectOption().quality}&startIndex=1`;
}
