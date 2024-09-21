import { Box, Grid2, Stack, Typography } from "@mui/material"
import { ValueControl } from "./ValueControl"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/productsSlice";

export const CartProductCard = ({ product }) => {
    const dispatch = useDispatch();
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
                <Typography className="shortenText" mb={4}>{product.title}</Typography>
                <CloseIcon onClick={() => dispatch(removeFromCart(product.id))} style={{ marginRight: 32, cursor: "pointer" }} />
            </Stack>
            <Stack direction="row" alignItems="flex-end">
                <ValueControl />
                {product.discont_price ? <>
                    <Typography variant="h3" ml={4} mr={2}>${product.discont_price}</Typography>
                    <Typography variant="crossed">${product.price}</Typography>
                </> : <Typography variant="h3" ml={4}>${product.price}</Typography>}
            </Stack>
        </Grid2>
    </Grid2>
}