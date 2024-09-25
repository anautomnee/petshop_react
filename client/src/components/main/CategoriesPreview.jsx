import { Box, Stack, Typography } from "@mui/material";
import { CategoryCard } from "../CategoryCard";
import { LinkBorderBtn } from "../../theme/customComponents";
import { Link } from "react-router-dom";

export const CategoriesPreview = ({ random_categories }) => {
    return <div className="container">

        <Stack direction="row" alignItems="center" mb={5}>
            <Typography mr={4} variant="h2">Categories</Typography>
            <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 844 }} />
            <Link to="/categories" >
                <LinkBorderBtn>All categories</LinkBorderBtn>
            </Link>
        </Stack>
        <Stack direction="row" gap={4} mb={13}>
            {random_categories.map(category =>
                <CategoryCard key={category.id} category={category} />)}
        </Stack>
    </div>
}