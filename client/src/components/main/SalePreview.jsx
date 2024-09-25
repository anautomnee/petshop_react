import { Box, Stack, Typography } from "@mui/material"
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
        <Stack direction="row" gap={4} mb={13}>
            {sale_products.map(product => <ProductCard page="sale" key={product.id} product={product} />)}
        </Stack>
    </div>
}