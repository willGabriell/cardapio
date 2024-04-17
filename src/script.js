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

let cart = [];

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


// Fechar o modal com o botão "fechar"
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

menu.addEventListener("click", (event) => {
    let parentBtn = event.target.closest(".add-to-card-btn");

    if (parentBtn) {
        const name = parentBtn.getAttribute("data-name");
        const price = parseFloat(parentBtn.getAttribute("data-price"));

        addToCart(name, price);

    }
})

//função adicionar ao carrinho
function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qtd += 1;

    } else {
        cart.push(
            {name, price, qtd: 1}
        )
    }
    
    updateCartModal()

}

function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.innerHTML = `
        <div>

            <div>
                <p>${item.name}</p>
                <p>${item.qtd}</p>
                <p>R$ ${item.price}</p>
            </div>

            <div>
                <button>Remover<button>
            </div>

        </div>
        `

        cartItemsContainer.appendChild(cartItemElement);
    })
}