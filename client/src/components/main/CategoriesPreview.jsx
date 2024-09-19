import { Box, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CategoryCard } from "../CategoryCard";
import { AllCategoriesBtn } from "../../theme/customComponents";

export const CategoriesPreview = () => {
    const { categories } = useSelector(state => state.categories)
    const four_categories = categories.filter(category => category.id < 5)
    return <div className="container">

        <Stack direction="row" alignItems="center" mb={5}>
            <Typography mr={4} variant="h2">Categories</Typography>
            <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 844 }} />
            <AllCategoriesBtn>All categories</AllCategoriesBtn>
        </Stack>
        <Stack direction="row" gap={4} mb={13}>
            {four_categories.map(category =>
                <CategoryCard key={category.id} category={category} />)}
        </Stack>
    </div>
}