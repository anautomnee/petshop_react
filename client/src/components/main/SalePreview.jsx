import { Box, Grid2, Stack, Typography } from "@mui/material"
import { LinkBorderBtn } from "../../theme/customComponents"
import { useSelector } from "react-redux"
import { ProductCard } from "../ProductCard";
import { selectRandomProductsWithSale } from "../../store/selectors";
import { Link } from "react-router-dom";

export const SalePreview = () => {
    const sale_products = useSelector(selectRandomProductsWithSale)

    return <div className="container">
        <Stack direction="row" alignItems="center" mb={5}>
            <Typography mr={4} variant="h2">Sales</Typography>
            <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 1190 }} />
            <Link to="/products"><LinkBorderBtn>All sales</LinkBorderBtn></Link>
        </Stack>
        <Grid2 mb={13} container justifyContent="center" rowSpacing={4} columnSpacing={{ xxs: 2, xs: 1, sm: 4, md: 4, lg: 4 }}>
            {sale_products.map(product => <Grid2 justifyContent="center" key={product.id} size="auto">
                <ProductCard page="sale" product={product} />
            </Grid2>)}
        </Grid2>
    </div>
}