import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Grid2, Typography } from "@mui/material"
import { filter } from "../utils/filter"
import { useBreadcrumbs } from "../utils/hooks"
import { MainLayout } from "../layouts/MainLayout"
import { ProductCard } from "../components/ProductCard"
import { FilterComponent } from "../components/filter/FilterComponent"

export const Sales = () => {
    const [shownProducts, setShownProducts] = useState([])
    const { products } = useSelector(state => state.products)
    const saleProducts = products.filter(item => item.discont_price)
    const filterObject = useSelector(state => state.filter)

    useEffect(() => {
        const result = filter(filterObject, saleProducts)
        setShownProducts(result)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterObject])

    useBreadcrumbs();

    return <MainLayout breadcrumbs={true}>
        <div className="container">
            <Typography mb={5} variant="h2">Discounted items</Typography>
            <FilterComponent sales={true} />
            <Grid2 mb={12} justifyContent={{ sm: "center", md: "flex-start" }} container rowSpacing={4} columnSpacing={{ xxs: 1, xs: 1, sm: 2, md: 3 }}>
                {shownProducts.length > 0 ? shownProducts?.map(product => <Grid2 key={product?.id} size="auto"><ProductCard page="sale" product={product} /></Grid2>) : <Typography>No items found</Typography>}
            </Grid2>
        </div>
    </MainLayout>
}