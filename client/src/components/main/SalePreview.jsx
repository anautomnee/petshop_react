import { Box, Stack, Typography } from "@mui/material"
import { AllCategoriesBtn } from "../../theme/customComponents"
import { useSelector } from "react-redux"
import { ProductCard } from "../ProductCard";

export const SalePreview = () => {
    const { products } = useSelector(state => state.products);
    const sale_products = products.filter(product => product.discont_price).slice(0, 4);
    console.log(sale_products)

    return <div className="container">
        <Stack direction="row" alignItems="center" mb={5}>
            <Typography mr={4} variant="h2">Sales</Typography>
            <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 1190 }} />
            <AllCategoriesBtn>All sales</AllCategoriesBtn>
        </Stack>
        <Stack direction="row" gap={4} mb={13}>
            {sale_products.map(product => <ProductCard key={product.id} product={product} />)}
        </Stack>
    </div>
}