const cart = document.querySelector('.js-cart');
const overlay = document.querySelector('.js-overlay');
const openCartButton = document.querySelector('.js-cart-btn');
const closeCartelements = document.querySelectorAll('.js-close-cart');

const getScrollbarWidth = () => {
    let div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollbarWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollbarWidth;
}
const scroll = getScrollbarWidth();
const openCart = () => {
    openCartButton.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        cart.classList.add('active')
        overlay.classList.add('active')
    })
};
const closeCart = () => {
    closeCartelements.forEach((item) => {
        item.addEventListener('click', () => {
            document.body.style.overflow = '';
            cart.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
};

export {
    openCart,
    closeCart

}