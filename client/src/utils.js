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
                filteredProducts = filteredProducts.sort(function (a, b) {
                    const dateA = new Date(a.createdAt)
                    const dateB = new Date(b.createdAt)
                    console.log(dateA,dateB)
                    return dateB - dateA
                })
                break;
            case("price: high-low"):
                filteredProducts = filteredProducts.sort(function (a, b) {
                    if(a.discont_price && b.discont_price) {
                        return b.discont_price - a.discont_price
                    } else if(a.discont_price) {
                        return b.price - a.discont_price
                    } else if(b.discont_price) {
                        return b.discont_price - a.price
                    } else {
                        return b.price - a.price
                    }
                })
                break;
            case("price: low-high"):
                filteredProducts = filteredProducts.sort(function (a, b) {
                    if(a.discont_price && b.discont_price) {
                        return a.discont_price - b.discont_price
                    } else if(a.discont_price) {
                        return a.discont_price - b.price
                    } else if(b.discont_price) {
                        return a.price - b.discont_price
                    } else {
                        return a.price - b.price
                    }
                })
                break;
            default:
                return filteredProducts
        }
    }
    return filteredProducts
}