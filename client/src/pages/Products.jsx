import { Grid2, Typography } from "@mui/material"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { MainLayout } from "../layouts/MainLayout"
import { useSelector } from "react-redux"
import { ProductCard } from "../components/ProductCard"
import { FilterComponent } from "../components/filter/FilterComponent"
import { filterDiscountedItems, filterItemsByPrice } from "../utils"
import { useEffect, useState } from "react"

export const Products = () => {
    const [shownProducts, setShownProducts] = useState([])
    const [priceFrom, setPriceFrom] = useState("");
    const [priceTo, setPriceTo] = useState("");
    const { products } = useSelector(state => state.products)

    useEffect(() => {
        setShownProducts(products)
    }, [products])

    const handlePriceFilter = (e, type) => {
        if (type === "from") {
            setPriceFrom(e.target.value)
            const productsByPrice = filterItemsByPrice(products, e.target.value, type)
            setShownProducts(productsByPrice)
        } else {
            setPriceTo(e.target.value)
            const productsByPrice = filterItemsByPrice(products, e.target.value, type)
            setShownProducts(productsByPrice)
        }
    }
    const handleCheckboxClick = (e) => {
        if (e.target.checked) {
            setShownProducts(filterDiscountedItems(products));
        } else {
            setShownProducts(products)
        }
    }
    return <MainLayout>
        <div className="container">
            <BreadcrumbsLine breadcrumbs={[{ title: "Main page", url: "/" }]} current="All products" />
            <Typography mb={5} variant="h2">All products</Typography>
            <FilterComponent priceFrom={priceFrom} priceTo={priceTo}
                handlePriceFilter={handlePriceFilter} handleCheckboxClick={handleCheckboxClick} />
            <Grid2 mb={12} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {shownProducts.length > 0 ? shownProducts?.map(product => <Grid2 key={product?.id} size={3}><ProductCard product={product} /></Grid2>) : <Typography>Loading..</Typography>}
            </Grid2>
        </div>
    </MainLayout>
}