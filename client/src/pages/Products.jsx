import { Grid2, Typography } from "@mui/material"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { MainLayout } from "../layouts/MainLayout"
import { useSelector } from "react-redux"
import { ProductCard } from "../components/ProductCard"
import { FilterComponent } from "../components/filter/FilterComponent"
import { filter } from "../utils"
import { useEffect, useState } from "react"

export const Products = () => {
    const [shownProducts, setShownProducts] = useState([])
    const { products } = useSelector(state => state.products)
    const filterObject = useSelector(state => state.filter)

    useEffect(() => {
        const result = filter(filterObject, products)
        setShownProducts(result)
    }, [filterObject, products])

    return <MainLayout>
        <div className="container">
            <BreadcrumbsLine breadcrumbs={[{ title: "Main page", url: "/" }]} current="All products" />
            <Typography mb={5} variant="h2">All products</Typography>
            <FilterComponent />
            <Grid2 mb={12} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {shownProducts.length > 0 ? shownProducts?.map(product => <Grid2 key={product?.id} size={3}><ProductCard product={product} /></Grid2>) : <Typography>No items found</Typography>}
            </Grid2>
        </div>
    </MainLayout>
}