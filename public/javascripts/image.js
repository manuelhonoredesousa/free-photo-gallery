const $modalDialog = document.querySelector("dialog");
const $BtnCloseModal = document.querySelector(".close");
const $BtnPrev = document.querySelector("#prev");
const $BtnNext = document.querySelector("#next");
const $DialogDownload = document.querySelector("#dialog_download");
const $DialogImage = document.querySelector("#dialog_image");
const $DialogTitle = document.querySelector("#dialog_title");
const $DialogLink = document.querySelector("#dialog_source");
const $DialogSize = document.querySelector("#dialog_size");
const $body = document.querySelector("body");
const $searchTxt = document.querySelector("#searchTxt")
const $allImageOnPage = Array.from(document.getElementsByClassName("thumb_image"));
const imageList = [];
let currentImageOnDialog = null;

$body.onload = () => loaddingPage();
$BtnCloseModal.onclick = () => closeTheImage();
$BtnNext.onclick = () => nextImage(currentImageOnDialog);
$BtnPrev.onclick = () => prevImage(currentImageOnDialog);
$DialogDownload.onclick = () => downloadImage(currentImageOnDialog);


$searchTxt.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchingFor()
  }
});

function loaddingPage() {
  $allImageOnPage.forEach((image, index) => {
    const toSave = {
      id: index,
      alt: image.alt.slice(0,40)+'...',
      source: image.attributes.img_source.value,
      imgLink: image.attributes.img_link.value,
    };
    imageList.push(toSave);
  });
}
function setImageOnDialog(image) {
  const img = imageList[image].imgLink;
  const txt = imageList[image].alt;
  const font = imageList[image].source;

  $DialogImage.src = img;
  $DialogTitle.textContent = txt;
  $DialogLink.setAttribute("href", font)
  fetch(img)
  .then(res=>res.blob())
  .then(blob=> $DialogSize.textContent = `(${(blob.size/1024/1024).toFixed(2)} MB)`)

}
function setDefaultDialogImage() {
  $DialogImage.src = "images/search_finding.svg";
}
function closeTheImage() {
  $modalDialog.close();
  setDefaultDialogImage();
  currentImageOnDialog = null;
}
function showTheImage(id) {
  currentImageOnDialog = parseInt(id);
  $modalDialog.showModal();
  setImageOnDialog(currentImageOnDialog);
}
function nextImage(id) {
  setDefaultDialogImage();
  const next = id + 1;
  const nextImageExistOnImageList =
    id + 1 <= imageList.length - 1 ? true : false;
  if (nextImageExistOnImageList) {
    setImageOnDialog(next);
    currentImageOnDialog = next;
  } else setImageOnDialog(currentImageOnDialog);
}
function prevImage(id) {
  setDefaultDialogImage();
  const prev = id - 1;
  const prevImageExistOnImageList = id - 1 >= 0 ? true : false;
  if (prevImageExistOnImageList) {
    setImageOnDialog(prev);
    currentImageOnDialog = prev;
  } else setImageOnDialog(currentImageOnDialog);
}
function goToPrevPagination(index) {
  const back = parseInt(index)-1;
  const prev = back >= 1 ? back : 1;
  goToPageBtn(prev)
}
function goToNextPagination(index) {
  const next = parseInt(index)+1
  goToPageBtn(next)
}
function goToPageBtn(index) {
  const pageToGo = parseInt(index)
  const searchParams = window.location.search
  const originURL = `${window.location.origin}/image`;

  const isThisPageDiferentToActual = (searchParams.substring(searchParams.lastIndexOf("=")+1)) != pageToGo

  if (isThisPageDiferentToActual) {
    const searchParamsChanged = searchParams.replace(searchParams.substring(searchParams.lastIndexOf("=")+1), pageToGo)
    window.location.href = originURL + searchParamsChanged
  }
}
function searchingFor(){
  const originURL = window.location.origin
  window.location.href = `${originURL}/image?search=${$searchTxt.value}&startIndex=1`;
}
function downloadImage(id) {
  const imagePath = imageList[id].imgLink;
  const imageName = imageList[id].alt; 
  saveAs(imagePath, imageName)
}
// function getNameAndExtentionOfURL(url){
  // return url.substring(url.lastIndexOf("/")+1)
// }

