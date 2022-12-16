const $imgResolution = document.querySelector("#resolution");
const $imgType = document.querySelector("#imageType");

$imgResolution.onchange = (e) => onChangeSelect(e);
$imgType.onchange = (e) => onChangeSelect(e);

function onChangeSelect(e) {
  const selectedOption = e.srcElement.value;
  const id = e.target.id;
  const isThisResolutionOption = id == "resolution";

  if (isThisResolutionOption) setSelectOption(selectedOption, "quality");
  else setSelectOption(selectedOption, "typeOfImage");
}
function getSelectOption() {
  const isQualitySet = localStorage.getItem("quality");
  const isImageTypeSet = localStorage.getItem("typeOfImage");

  if(!isQualitySet && !isImageTypeSet) {
    setSelectOption("LARGE", "quality");
    setSelectOption("photo", "typeOfImage");
  }

  setSelectTag(isQualitySet, isImageTypeSet);
  return {type:isImageTypeSet, quality:isQualitySet};
}
function setSelectTag(quality, type) {
    Array.from($imgResolution).forEach((element) => {
      if (element.value == quality) element.selected = true;
    });
    Array.from($imgType).forEach((element) => {
      if (element.value == type) element.selected = true;
    });
}
function setSelectOption(selectedOption, option) {
    localStorage.setItem(option, selectedOption);
}