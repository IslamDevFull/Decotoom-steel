import products from "./products.js"
import { renderProductCards } from "./modules/productCards.js";
import { openCart, closeCart } from "./modules/cartPopup.js";
import { cartData } from "./modules/cardData.js";
window.addEventListener('DOMContentLoaded',()=>{
    const productContainer = document.querySelector('.js-products-list')
    renderProductCards(products,productContainer);

    openCart();
    closeCart();
    cartData()
});
