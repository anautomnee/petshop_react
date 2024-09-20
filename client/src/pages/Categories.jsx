import { Grid2, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { CategoryCard } from "../components/CategoryCard"
import { MainLayout } from "../layouts/MainLayout"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"

export const Categories = () => {
    const { categories } = useSelector(state => state.categories);
    return <MainLayout>
        <div className="container">
            <BreadcrumbsLine breadcrumbs={[{ title: "Main page", url: "/" }]} current="Categories" />
            <Typography mb={5} variant="h2">Categories</Typography>
            <Grid2 mb={12} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {categories.map(category => <Grid2 key={category.id} size={3}><CategoryCard category={category} /></Grid2>)}
            </Grid2>
        </div>
    </MainLayout>

}