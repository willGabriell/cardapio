const menu = document.getElementById("main");
const modal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

// Abrir o Modal do Carrinho
cartBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.classList.remove("hidden");
});

// Fechar o modal quando clicar fora
modal.addEventListener("click", (event) => {
    if(event.target === modal){
        modal.style.display = "none"
    };
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})