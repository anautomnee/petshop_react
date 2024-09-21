export const getDiscount = (original_price, discont_price) => {
    return Math.round(100 - discont_price*100/original_price);
}

export const getCartTotal = (productsInCart) => {
    const total =  productsInCart.reduce((acc, el) => {
        if (el.discont_price) {
            return acc + el.discont_price
        }
        return acc + el.price;
    }, 0)
    return total
}