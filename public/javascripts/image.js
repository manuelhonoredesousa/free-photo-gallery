// const $ImgOpenModal = document.querySelectorAll("#openImage")
const $modalDialog = document.querySelector("dialog")
const $BtnCloseModal = document.querySelector(".close")
const $BtnDownload = document.querySelectorAll("#download")
const $BtnPrev = document.querySelector("#prev")
const $BtnNext = document.querySelector("#next")
const $DialogImage = document.querySelector("#dialog_image")


// $ImgOpenModal.forEach(openBtn => openBtn.onclick = () => $modalDialog.showModal())
$BtnCloseModal.onclick = () => closeTheImage()
$BtnDownload.forEach(btn => btn.onclick = () => alert("Download"))
$BtnPrev.onclick = () => alert("Prev")
$BtnNext.onclick = () => alert("Next")

function closeTheImage() {
    $modalDialog.close()
    $DialogImage.src = "images/search_finding.svg"
}
function showTheImage(data) {
    $modalDialog.showModal()
    $DialogImage.src = data
}