import { Grid2, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { useParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { FilterComponent } from "../components/filter/FilterComponent"
import { filter, useBreadcrumbs } from "../utils"
import { useSelector } from "react-redux"

export const Category = () => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [shownProducts, setShownProducts] = useState([])
    const { categoryId } = useParams();
    const filterObject = useSelector(state => state.filter)
    useBreadcrumbs();


    useEffect(() => {
        async function getProductsByCategory(id) {
            try {
                const response = await axios.get(`http://localhost:3333/categories/${id}`);
                setCategoryProducts(response.data);
                setShownProducts(response.data);
            } catch (error) {
                console.log(error.message);
                return error.message;
            }
        };
        getProductsByCategory(categoryId)
    }, [categoryId]);

    useEffect(() => {
        if (categoryProducts.data) {
            const result = filter(filterObject, categoryProducts.data)
            setShownProducts({ ...shownProducts, data: result })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterObject, categoryProducts])


    return <MainLayout breadcrumbs={true}>
        <div className="container">
            <Typography mb={5} variant="h2">{shownProducts?.category?.title}</Typography>
            <FilterComponent />
            <Grid2 mb={12} container justifyContent={{ sm: "center", md: "flex-start" }} rowSpacing={4} columnSpacing={{ xxs: 1, xs: 1, sm: 2, md: 3 }}>
                {shownProducts?.data?.length > 0 ? shownProducts.data.map(product => <Grid2 key={product?.id} size="auto"><ProductCard page={categoryId} product={product} /></Grid2>) : <Typography>No products found</Typography>}
            </Grid2>
        </div>
    </MainLayout>
}