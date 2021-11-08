const cartButtonElement = document.getElementById("cartButton");
const closeButtonElement = document.getElementById("close-modal");
let isCartModalVisible = false;
let cartProductsList = "";

function openModal() {
    cartModalElement.style.display = "flex";
}

function closeModal() {
    cartModalElement.style.display = "none";
}

cartButtonElement.addEventListener("click", openModal)
closeButtonElement.addEventListener("click", closeModal)