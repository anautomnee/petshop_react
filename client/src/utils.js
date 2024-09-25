import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { BreadcrumbsContext } from "./context/breadcrumbsContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const getDiscount = (original_price, discont_price) => {
    return Math.round(100 - discont_price*100/original_price);
}

export const filter = (filterObject, products) => {
    let filteredProducts = [...products]
    // Price
    filteredProducts = filteredProducts.filter(item => {
        if(item.discont_price) {
            return item.discont_price >= filterObject.priceFrom && item.discont_price <= filterObject.priceTo
        } else {
            return item.price >= filterObject.priceFrom && item.price <= filterObject.priceTo 
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
                filteredProducts = filteredProducts.sort(function (a, b) {
                    return b.id - a.id
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

const pageTitle = {
    products: "All products",
    categories: "All categories",
    sales: "All sales"
}

export const useBreadcrumbs = () => {
    const location = useLocation();
    const {setCrumbs} = useContext(BreadcrumbsContext);
    const { productId, categoryId } = useParams();
    const page = location.pathname.split("/").filter(pathItem => pathItem !== "")[0];
    const crumbsArray = [{
        url: "/",
        title: "Main page"
    }, {
        url: `/${page}`,
        title: pageTitle[page]
    }];

    const category = useSelector(state => state.categories.categories).find(category => category.id === Number(categoryId));
    if(category) {
        crumbsArray.push({
            url: `/${page}/${categoryId}`,
            title: category.title
        })
    };
    const product = useSelector(state => state.products.products).find(product => product.id === Number(productId));
    if (category && product) {
        crumbsArray.push({
            url: `/${page}/${categoryId}/${productId}`,
            title: `${product.title.slice(0,18)}...`
        })
    }
    if (!category && product) {
        crumbsArray.push({
            url: `/${page}/${productId}`,
            title: `${product.title.slice(0,18)}...`
        })
    }

    useEffect(() => {
        setCrumbs(crumbsArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])
}



export const getQuantity = (productsInCart, productId) => {
    if(productsInCart.length > 0 ) {
        const currentProduct = productsInCart.find(product => product.id === Number(productId));
        return currentProduct ? currentProduct.quantity : 0;
    }
    return 0
}


