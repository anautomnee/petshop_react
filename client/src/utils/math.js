export const getDiscount = (original_price, discont_price) => {
    return Math.round(100 - discont_price*100/original_price);
}

export const getQuantity = (productsInCart, productId) => {
    if(!productsInCart.length) {
        return;
    }
    const currentProduct = productsInCart.find(product => product.id === Number(productId));
    return currentProduct ? currentProduct.quantity : 0;
}


