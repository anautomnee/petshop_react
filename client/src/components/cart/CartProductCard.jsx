import { Box, Grid2, Stack, Typography } from "@mui/material"
import { ValueControl } from "./ValueControl"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { getTotal, removeFromCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuantity } from "../../utils";

export const CartProductCard = ({ productsInCart, product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        setQuantity(getQuantity(productsInCart, product.id))
    }, [productsInCart, product])
    return <Grid2 container spacing={4} mb={2}
        sx={{ border: "1px solid #DDDDDD", borderRadius: 3, width: "100%" }}>
        <Grid2 size={3}>
            <Box sx={{
                width: 200,
                height: 180,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                backgroundImage: `url('http://localhost:3333${product.image}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                borderRight: "1px solid #DDDDDD"
            }}>
            </Box>
        </Grid2>
        <Grid2 size={8} ml={4}>
            <Stack direction="row" justifyContent="space-between" sx={{ width: "100%", mt: 4 }}>
                <Link to={`/products/${product.id}`}>
                    <Typography className="shortenText" mb={4} sx={{ "&:hover": { textDecoration: "underline" } }}>{product.title}</Typography>
                </Link>
                <CloseIcon onClick={() => {
                    dispatch(removeFromCart(product.id))
                    dispatch(getTotal())
                }} style={{ marginRight: 32, cursor: "pointer" }} />
            </Stack>
            <Stack direction="row" alignItems="flex-end">
                <ValueControl page="cart" product={product} quantity={quantity} />
                {product.discont_price ? <>
                    <Typography variant="h3" ml={4} mr={2}>${product.discont_price}</Typography>
                    <Typography variant="crossed">${product.price}</Typography>
                </> : <Typography variant="h3" ml={4}>${product.price}</Typography>}
            </Stack>
        </Grid2>
    </Grid2>
}