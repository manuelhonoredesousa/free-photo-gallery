const $modalDialog = document.querySelector("dialog");
const $BtnCloseModal = document.querySelector(".close");
const $BtnDownload = document.querySelector("#download");
const $BtnPrev = document.querySelector("#prev");
const $BtnNext = document.querySelector("#next");
const $DialogImage = document.querySelector("#dialog_image");
const $DialogTitle = document.querySelector("#dialog_title");
const $DialogLink = document.querySelector("#dialog_source");
const $body = document.querySelector("body");
const $allImageOnPage = Array.from(document.getElementsByClassName("thumb_image"));
const imageList = [];
let currentImageOnDialog = null;

$body.onload = () => loaddingPage();
$BtnCloseModal.onclick = () => closeTheImage();
$BtnNext.onclick = () => nextImage(currentImageOnDialog);
$BtnPrev.onclick = () => prevImage(currentImageOnDialog);

function setImageOnDialog(image) {
  $DialogImage.src = imageList[image].imgLink;
  $DialogTitle.textContent = imageList[image].alt
  $DialogLink.setAttribute("href", imageList[image].source)
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

function downloadImage(id) {
  console.log("IS", id);
  //   alert('ID -> ', id)
}

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
