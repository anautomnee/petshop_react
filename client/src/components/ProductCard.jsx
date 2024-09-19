import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => {
    return <Link to={`categories/${product.id}`}>
        <Box sx={{
            borderRadius: 3,
            width: 316,
            height: 422,
            border: "1px solid #DDDDDD",
            transition: "transform 0.4s",
            "&:hover": {
                transform: "scale(1.02)"
            }
        }}>
            <Stack direction="column" gap={2}>
                <Box sx={{
                    width: 314,
                    height: 284,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    backgroundImage: `url('http://localhost:3333${product.image}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    borderBottom: "1px solid #DDDDDD",
                }}>
                </Box>
                <Typography className="shortenText" sx={{ paddingLeft: 4 }}>{product.title}</Typography>
                <Stack direction="row" alignItems="flex-end" gap={2} sx={{ paddingLeft: 4 }}>
                    <Typography variant="h3">${product.price}</Typography>
                    <Typography variant="crossed">${product.discont_price}</Typography>
                </Stack>
            </Stack>
        </Box>

    </Link>
}