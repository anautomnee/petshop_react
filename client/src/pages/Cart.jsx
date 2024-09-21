import { Box, Button, Grid2, Stack, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { Link } from "react-router-dom"
import { LinkBorderBtn } from "../theme/customComponents"
import { useSelector } from "react-redux"
import { CartProductCard } from "../components/cart/CartProductCard"
import { OrderDetails } from "../components/cart/OrderDetails"
import { useEffect, useState } from "react"
import { getCartTotal } from "../utils"
import { DialogComponent } from "../components/cart/DialogComponent"

export const Cart = () => {
    const { productsInCart } = useSelector(state => state.products);
    const [total, setTotal] = useState(0)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (productsInCart.length > 0) {
            setTotal(getCartTotal(productsInCart));
        }
    }, [productsInCart])
    const handleClickOpen = () => setOpen(true);
    return <MainLayout>
        <div className="container">
            <DialogComponent open={open} setOpen={setOpen} />
            <Stack direction="row" alignItems="center" mb={5} mt={5}>
                <Typography variant="h2" sx={{ width: 900 }}>Shopping cart</Typography>
                <Box sx={{ borderBottom: "1px solid #DDDDDD", width: "100%" }} />
                <Link to="/"><LinkBorderBtn sx={{ width: 160 }}>Back to the store</LinkBorderBtn></Link>
            </Stack>
            {productsInCart.length > 0 ?

                <Grid2 container spacing={4}>
                    <Grid2 size={7}>
                        {productsInCart.length > 0 && productsInCart.map(product => <CartProductCard key={product.id} product={product} />)}
                    </Grid2>
                    <Grid2 size={5}>
                        <OrderDetails items={productsInCart.length} total={total} handleClickOpen={handleClickOpen} />
                    </Grid2>

                </Grid2> :
                <Stack mb={8}>
                    <Typography mb={4}>Looks like you have no items in your basket currently.</Typography>
                    <Link to="/products">
                        <Button variant="contained" sx={{ padding: "8px 32px", fontWeight: 600 }}>Continue shopping</Button>
                    </Link>
                </Stack>
            }
        </div>
    </MainLayout>
}