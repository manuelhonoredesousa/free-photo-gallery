const $searchTxt = document.querySelector("#searchTxt");
const $imgResolution = document.querySelector("#resolution");
const $imgType = document.querySelector("#imageType");
let searchResolution = "";
let searchType = "";

$imgResolution.onchange = (e) => onChangeSelect(e);
$imgType.onchange = (e) => onChangeSelect(e);

// $searchTxt.onkeypress = (e) => enterPressed(e);


function enterPressed(e) {
  console.log("Enter");
}
// $searchTxt.forEach((txt) => {
  // txt.  txt.addEventListener("keypress", function (event) {
    // if (event.key === "Enter") {
      // event.preventDefault();
      // searchingFor();
    // }
  // });
// });

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

  if (isQualitySet && isImageTypeSet) {
    searchResolution = isQualitySet;
    searchType = isImageTypeSet;
  } else {
    setSelectOption("LARGE", "quality", 1);
    setSelectOption("photo", "typeOfImage", 2);
  }
  setSelectTag(searchResolution, searchType);
}
function setSelectTag(searchResolution, searchType) {
  Array.from($imgResolution).forEach((element) => {
    if (element.value == searchResolution) element.selected = true;
  });
  Array.from($imgType).forEach((element) => {
    if (element.value == searchType) element.selected = true;
  });
}
function setSelectOption(selectedOption, option, id) {
  if (id == 1) {
    localStorage.setItem(option, selectedOption);
    searchResolution = selectedOption;
  } else {
    localStorage.setItem(option, selectedOption);
    searchType = selectedOption;
  }
}

function searchingFor() {
  const originURL = window.location.origin;
  window.location.href = `${originURL}/image?search=${$searchTxt.value}&typeOfImage=${searchType}&quality=${searchResolution}&startIndex=1`;
}
