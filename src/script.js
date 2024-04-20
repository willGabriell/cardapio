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
    updateCartModal();
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

// Função para atualizar o carrinho
function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-medium">${item.name}</p>
                    <p>Qtd: ${item.qtd}</p>
                    <p class="font-medium" >R$ ${item.price.toFixed(2)}</p>
                </div>
                <button>Remover</button>
            </div>

        `

        total += item.price * item.qtd;

        cartItemsContainer.appendChild(cartItemElement);
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    cartCounter.innerHTML = cart.length

}