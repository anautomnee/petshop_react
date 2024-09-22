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

export const filterDiscountedItems = (items) => {
    return items.filter(item => item.discont_price)
}

export const filterItemsByPrice = (items, number, type) => {
    if(type === "from") {
        return items.filter(item => {
            if(item.discont_price) {
                return item.discont_price >= number
            } else {
                return item.price >= number
            }
        })
    } else {
        return items.filter(item => {
            if(item.discont_price) {
                return item.discont_price <= number
            } else {
                return item.price <= number
            }
        })
    }
}