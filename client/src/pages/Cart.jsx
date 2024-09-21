import { Box, Grid2, Stack, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { Link } from "react-router-dom"
import { LinkBorderBtn } from "../theme/customComponents"
import { useSelector } from "react-redux"
import { CartProductCard } from "../components/cart/CartProductCard"
import { OrderDetails } from "../components/cart/OrderDetails"
import { useEffect, useState } from "react"
import { getCartTotal } from "../utils"

export const Cart = () => {
    const { productsInCart } = useSelector(state => state.products);
    const [total, setTotal] = useState(0)
    useEffect(() => {
        if (productsInCart.length > 0) {
            setTotal(getCartTotal(productsInCart));
        }
    }, [productsInCart])
    return <MainLayout>
        <div className="container">
            <Stack direction="row" alignItems="center" mb={5} mt={5}>
                <Typography variant="h2" sx={{ width: 900 }}>Shopping cart</Typography>
                <Box sx={{ borderBottom: "1px solid #DDDDDD", width: "100%" }} />
                <Link to="/"><LinkBorderBtn sx={{ width: 160 }}>Back to the store</LinkBorderBtn></Link>
            </Stack>
            <Grid2 container spacing={4}>
                <Grid2 size={7}>
                    {productsInCart.length > 0 && productsInCart.map(product => <CartProductCard key={product.id} product={product} />)}
                </Grid2>
                <Grid2 size={5}>
                    <OrderDetails items={productsInCart.length} total={total} />
                </Grid2>

            </Grid2>
        </div>
    </MainLayout>
}