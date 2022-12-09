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
const $allImageOnPage = Array.from(document.getElementsByClassName("thumb_image"));
const imageList = [];
let currentImageOnDialog = null;

$body.onload = () => loaddingPage();
$BtnCloseModal.onclick = () => closeTheImage();
$BtnNext.onclick = () => nextImage(currentImageOnDialog);
$BtnPrev.onclick = () => prevImage(currentImageOnDialog);
$DialogDownload.onclick = () => downloadImage(currentImageOnDialog);

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

function downloadImage(id) {
  const imagePath = imageList[id].imgLink;
  const imageName = imageList[id].alt; 
  // const imageName = getNameAndExtentionOfURL(imageList[id].alt); 
 const $olaManuel = 'Sousa'
  saveAs(imagePath, imageName)
  // console.log(imageName);
  // console.log(imagePath);
}

// function getNameAndExtentionOfURL(url){
  // return url.substring(url.lastIndexOf("/")+1)
// }

// const image = ["https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg"]
// const blob = new Blob([image], {type: "octet-stream"})
// const blob = new Blob([image], {type: "image/jpg"})
// const href = URL.createObjectURL(blob)
// const a = Object.assign(document.createElement("a"), {
  // href,
  // style: "display:none",
  // download: 'Textando.jpg' 
// }) 
// document.body.appendChild(a)
// console.log(a);
// a.click()
// URL.revokeObjectURL(href)
// a.remove()

// console.log(blob);
// console.log(href);