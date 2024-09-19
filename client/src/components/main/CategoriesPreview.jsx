import { Box, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { CategoryPreviewCard } from "./CategoryPreviewCard";

const AllCategoriesBtn = styled('button')({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "fit-content",
    minWidth: 140,
    padding: "8px 16px",
    color: "#8B8B8B",
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer"
})

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
                <CategoryPreviewCard key={category.id} title={category.title} img={`http://localhost:3333${category.image}`} />)}</Stack>
    </div>
}