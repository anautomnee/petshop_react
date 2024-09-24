import { Box, Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { SaleBadge } from "../theme/customComponents"
import { getDiscount } from "../utils"

export const ProductCard = ({ product }) => {
    const discount = getDiscount(product?.price, product?.discont_price);
    return <Box sx={{
        position: "relative",
        borderRadius: 3,
        width: 316,
        height: 422,
        border: "1px solid #DDDDDD",
        transition: "transform 0.4s",
        "&:hover": {
            transform: "scale(1.02)"
        }
    }}>
        <Button variant="contained"
            sx={{
                position: "absolute",
                top: 210,
                right: 16,
                zIndex: 5,
                width: 284,
                height: 58
            }}>
            <Typography>Add to cart</Typography></Button>
        <Link to={`/products/${product.id}`}>
            <Stack direction="column" gap={2} sx={{ position: "relative" }}>
                {product.discont_price && <SaleBadge>-{discount}%</SaleBadge>}
                <Box sx={{
                    width: 314,
                    height: 284,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    backgroundImage: `url('http://localhost:3333${product.image}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    borderBottom: "1px solid #DDDDDD",
                }}>
                </Box>
                <Typography className="shortenText" sx={{ paddingLeft: 4 }}>{product.title}</Typography>
                <Stack direction="row" alignItems="flex-end" gap={2} sx={{ paddingLeft: 4 }}>
                    {product.discont_price ? <>
                        <Typography variant="h3">${product.discont_price}</Typography>
                        <Typography variant="crossed">${product.price}</Typography>
                    </> : <Typography variant="h3">${product.price}</Typography>}
                </Stack>
            </Stack>
        </Link>
    </Box>

}