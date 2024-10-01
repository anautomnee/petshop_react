import { useSelector } from "react-redux"
import { Grid2, Typography } from "@mui/material"
import { useBreadcrumbs } from "../utils/hooks"
import { MainLayout } from "../layouts/MainLayout"
import { CategoryCard } from "../components/CategoryCard"

export const Categories = () => {
    const { categories } = useSelector(state => state.categories);
    useBreadcrumbs();
    return <MainLayout breadcrumbs={true}>
        <div className="container">
            <Typography mb={5} variant="h2">Categories</Typography>
            <Grid2 mb={12} justifyContent={{ sm: "center", md: "flex-start" }} container rowSpacing={4} columnSpacing={{ xxs: 1, xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}>
                {categories.map(category => <Grid2 key={category.id} size="auto"><CategoryCard category={category} /></Grid2>)}
            </Grid2>
        </div>
    </MainLayout>

}