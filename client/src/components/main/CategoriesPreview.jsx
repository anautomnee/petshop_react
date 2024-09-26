import { Box, Grid2, Stack, Typography } from "@mui/material";
import { CategoryCard } from "../CategoryCard";
import { LinkBorderBtn } from "../../theme/customComponents";
import { Link } from "react-router-dom";

export const CategoriesPreview = ({ random_categories }) => {
    return <div className="container">

        <Stack direction="row" alignItems="center" mb={5}>
            <Typography sx={{ mr: { sm: 4, xs: 2 } }} variant="h2">Categories</Typography>
            <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 844 }} />
            <Link to="/categories" >
                <LinkBorderBtn sx={{ minWidth: 160 }}>All categories</LinkBorderBtn>
            </Link>
        </Stack>
        <Grid2 mb={13} container justifyContent="center" rowSpacing={4} columnSpacing={{ xxs: 2, xs: 2, sm: 3, md: 3, lg: 3, xl: 4 }}>
            {random_categories.map(category =>
                <Grid2 size="auto" key={category.id} ><CategoryCard category={category} /></Grid2>)}
        </Grid2>
    </div>
}