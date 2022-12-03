const openModal = document.querySelectorAll("#openImage")
const modal = document.querySelector("dialog")
const closeModal = document.querySelector(".close")


openModal.forEach(openBtn => openBtn.onclick = () => modal.showModal())
closeModal.onclick = () => modal.close()
