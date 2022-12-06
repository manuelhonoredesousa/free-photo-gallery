// const $ImgOpenModal = document.querySelectorAll("#openImage")
const $modalDialog = document.querySelector("dialog");
const $BtnCloseModal = document.querySelector(".close");
const $BtnDownload = document.querySelectorAll("#download");
const $BtnPrev = document.querySelector("#prev");
const $BtnNext = document.querySelector("#next");
const $DialogImage = document.querySelector("#dialog_image");
const $body = document.querySelector("body");
const $allImageOnPage = Array.from(
  document.getElementsByClassName("thumb_image")
);
const imageList = [];
let currentImageOnDialog = null;

// $ImgOpenModal.forEach(openBtn => openBtn.onclick = () => $modalDialog.showModal())
// $BtnDownload.forEach(btn => btn.onclick = () => downloadImage())
$body.onload = () => loaddingPage();
$BtnCloseModal.onclick = () => closeTheImage();
$BtnNext.onclick = () => nextImage(currentImageOnDialog);
$BtnPrev.onclick = () => alert("Prev");

function setImageOnDialog(image) {
  $DialogImage.src = image;
}
function closeTheImage() {
  $modalDialog.close();
  $DialogImage.src = "images/search_finding.svg";
  currentImageOnDialog = null;
}
function showTheImage(id) {
  const imageId = parseInt(id);
  //   const imageLink = data[1];
  currentImageOnDialog = imageId;
  $modalDialog.showModal();
  setImageOnDialog(imageList[imageId].imgLink);
  //   setImageOnDialog(imageLink);
}

function nextImage(id) {
//   verifyNextPrevBTN();
  const next = id + 1;
  //   console.log(id);
  //   console.log(next);
  const nextImageExistOnImageList =
    id + 1 <= imageList.length - 1 ? true : false;
  if (nextImageExistOnImageList) {
    setImageOnDialog(imageList[next].imgLink);
    currentImageOnDialog = next;
    // console.log(imageList[next].imgLink);
  }

}
function verifyNextPrevBTN() {
    //    else {
    // $BtnNext.setAttribute("disabled", true);
    // $BtnNext.classList.add("disable");
//   }
  const canEnableNext =
    currentImageOnDialog + 1 <= imageList.length - 1 ? true : false;
  // const canEnablePrev = currentImageOnDialog+1 <= imageList.length - 1 ? true : false;
  if (canEnableNext) {
    $BtnNext.setAttribute("disabled", false);
    $BtnNext.classList.remove("disable");
  }
  // if(canEnableNext){
  // $BtnNext.setAttribute("disabled",false)
  // $BtnNext.classList.remove("disable")
  // }
}
function downloadImage(id) {
  console.log("IS", id);
  //   alert('ID -> ', id)
}

function loaddingPage() {
  $allImageOnPage.forEach((image, index) => {
    const toSave = {
      id: index,
      alt: image.alt,
      imgLink: image.attributes.img_link.value,
    };
    imageList.push(toSave);
  });
}
