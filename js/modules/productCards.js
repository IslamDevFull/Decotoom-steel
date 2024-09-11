const renderProductCard = ({id,photo,model,prices}) => {
    const li = document.createElement('li');
    li.classList.add('product','column','aic','js-product')
    li.innerHTML = `
    <li>
    <a href="#" id="${id}" class="link column aic js-link-card">
        
        <div class="newImg">
        <div class="newNew">Новинка</div>
            <img src="img/${photo[0]}" alt="" class="image js-image-card">   
        </div>
        <div>
            <h3 class="title js-title-card">${model}</h3>
        </div>  
        <div class="product-price">
            <span class="price js-price-card">${prices[0]}</span><span>sum</span>
        </div>       
    </a>
    <button type="button" class="buy-button js-buy-button">В корзину</button>
</li>
    `
    return li;
};

const appendProductCard = (product, container) => {
    container.append(product);
}

const renderProductCards = (products, container) => {
    // console.log(products)

    products.forEach((product) => {
        const card = renderProductCard(product);
        // console.log('card: ', card);
        appendProductCard(card,container);
    })
};

export {
    renderProductCards
};