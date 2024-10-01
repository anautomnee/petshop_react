export const filter = (filterObject, products) => {
    let filteredProducts = [...products]
    // Price
    filteredProducts = products.filter(product => {
        if(product.discont_price) {
            return product.discont_price >= filterObject.priceFrom && product.discont_price <= filterObject.priceTo
        } else {
            return product.price >= filterObject.priceFrom && product.price <= filterObject.priceTo 
        }
    })
    if (filterObject.sale){
        filteredProducts = filteredProducts.filter(item => item.discont_price)
    }
    if (filterObject.sorted){
        switch(filterObject.sorted) {
            case("by default"):
                return filteredProducts
            case("newest"):
                filteredProducts.sort(function (a, b) {
                    return b.id - a.id
                })
                break;
            case("price: high-low"):
                filteredProducts.sort(function (a, b) {
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
                filteredProducts.sort(function (a, b) {
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