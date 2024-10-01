import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { emptyCart, getTotal } from "../store/cartSlice"
import { Box, Button, Grid2, Stack, Typography } from "@mui/material"
import { LinkBorderBtn } from "../theme/customComponents"
import { MainLayout } from "../layouts/MainLayout"
import { CartProductCard } from "../components/cart/CartProductCard"
import { OrderDetails } from "../components/cart/OrderDetails"
import { DialogComponent } from "../components/cart/DialogComponent"

export const Cart = () => {
    const { productsInCart, total } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        dispatch(emptyCart())
        setOpen(true)
    };
    useEffect(() => {
        dispatch(getTotal())
    }, [dispatch, total])
    return <MainLayout>
        <div className="container">
            <DialogComponent open={open} setOpen={setOpen} />
            <Stack direction="row" alignItems="center" mb={5} mt={5} justifyContent="space-between">
                <Typography variant="h2" sx={{ width: "fit-content", mr: 1 }}>Shopping cart</Typography>
                <Stack direction="row" alignItems="center">
                    <Box sx={{ borderBottom: "1px solid #DDDDDD", width: { xxs: 0, xs: 90, sm: 180, md: 380, lg: 520, xl: 640 } }} />
                    <Link to="/"><LinkBorderBtn sx={{ width: { xs: 170, xxs: 120 } }}>Back to the store</LinkBorderBtn></Link>
                </Stack>
            </Stack>
            {productsInCart?.length > 0 ?

                <Grid2 container direction={{ xxs: "column", xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }} spacing={4}>
                    <Grid2 size={7}>
                        {productsInCart?.length > 0 && productsInCart?.map(product => <CartProductCard key={product.id} productsInCart={productsInCart} product={product} />)}
                    </Grid2>
                    <Grid2 size="auto" mb={5} sx={{ minWidth: { md: 370, lg: 480, xl: 548 } }}>
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