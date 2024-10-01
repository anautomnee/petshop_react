import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BreadcrumbsContext } from "../context/breadcrumbsContext";
import { useSelector } from "react-redux";

export const useScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
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