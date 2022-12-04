const $ImgOpenModal = document.querySelectorAll("#openImage")
const $modalDialog = document.querySelector("dialog")
const $BtnCloseModal = document.querySelector(".close")
const $BtnDownload = document.querySelectorAll("#download")
const $BtnPrev = document.querySelector("#prev")
const $BtnNext = document.querySelector("#next")


$ImgOpenModal.forEach(openBtn => openBtn.onclick = () => $modalDialog.showModal())
$BtnCloseModal.onclick = () => $modalDialog.close()
$BtnDownload.forEach(btn => btn.onclick = () => alert("Download"))
$BtnPrev.onclick = () => alert("Prev")
$BtnNext.onclick = () => alert("Next")
