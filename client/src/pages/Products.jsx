import { Grid2, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { useSelector } from "react-redux"
import { ProductCard } from "../components/ProductCard"
import { FilterComponent } from "../components/filter/FilterComponent"
import { filter } from "../utils/filter"
import { useBreadcrumbs } from "../utils/hooks"
import { useEffect, useState } from "react"

export const Products = () => {
    const [shownProducts, setShownProducts] = useState([])
    const { products } = useSelector(state => state.products)
    const filterObject = useSelector(state => state.filter)

    useEffect(() => {
        const result = filter(filterObject, products)
        setShownProducts(result)
    }, [filterObject, products])

    useBreadcrumbs();

    return <MainLayout breadcrumbs={true}>
        <div className="container">
            <Typography mb={5} variant="h2">All products</Typography>
            <FilterComponent />
            <Grid2 mb={12} justifyContent="center" container rowSpacing={4} columnSpacing={{ xxs: 1, xs: 1, sm: 2, md: 3 }}>
                {shownProducts.length > 0 ? shownProducts?.map(product => <Grid2 key={product?.id} size="auto"><ProductCard page="products" product={product} /></Grid2>) : <Typography>No items found</Typography>}
            </Grid2>
        </div>
    </MainLayout>
}