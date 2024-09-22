import { Grid2, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { useParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { FilterComponent } from "../components/filter/FilterComponent"

export const Category = () => {
    const [products, setProducts] = useState({});
    const { categoryId } = useParams();

    useEffect(() => {
        async function getProductsByCategory(id) {
            try {
                const response = await axios.get(`http://localhost:3333/categories/${id}`);
                setProducts(response.data);
            } catch (error) {
                console.log(error.message);
                return error.message;
            }
        };
        getProductsByCategory(categoryId)
    }, [categoryId]);

    return <MainLayout>
        <div className="container">
            <BreadcrumbsLine breadcrumbs={[{ title: "Main page", url: "/" }, { title: "Categories", url: "/categories" }]} current={products?.category?.title} />
            <Typography mb={5} variant="h2">{products?.category?.title}</Typography>
            <FilterComponent />
            <Grid2 mb={12} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {products?.data?.length > 0 ? products.data.map(product => <Grid2 key={product?.id} size={3}><ProductCard product={product} /></Grid2>) : <Typography>Loading...</Typography>}
            </Grid2>
        </div>
    </MainLayout>
}