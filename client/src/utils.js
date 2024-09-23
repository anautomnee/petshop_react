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

export const filter = (filterObject, products) => {
    let filteredProducts = [...products]
    if (filterObject.priceFrom){
        filteredProducts = filteredProducts.filter(item => {
            if(item.discont_price) {
                return item.discont_price >= filterObject.priceFrom
            } else {
                return item.price >= filterObject.priceFrom
            }
        })
    }
    if (filterObject.priceTo){
        filteredProducts = filteredProducts.filter(item => {
            if(item.discont_price) {
                return item.discont_price <= filterObject.priceTo
            } else {
                return item.price <= filterObject.priceTo
            }
        })
    }
    if (filterObject.sale){
        filteredProducts = filteredProducts.filter(item => item.discont_price)
    }
    if (filterObject.sorted){
        switch(filterObject.sorted) {
            case("by default"):
                return filteredProducts
            case("newest"):
            // TODO
                return 0
            case("price: high-low"):
            // TODO
                return 0
            case("price: low-high"):
            // TODO
                return 0
            default:
                return filteredProducts
        }
    }
    return filteredProducts
}