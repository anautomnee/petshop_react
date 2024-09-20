import { Typography } from "@mui/material"
import { BreadcrumbsLine } from "../components/breadcrumbs/BreadcrumbsLine"
import { MainLayout } from "../layouts/MainLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Product = () => {
    const [product, setProduct] = useState({});
    const [categoryName, setCategoryName] = useState("");
    const { productId } = useParams();
    const API_URL = "http://localhost:3333"

    useEffect(() => {
        async function getProduct(id) {
            try {
                const response = await axios.get(`${API_URL}/products/${id}`);
                setProduct(response.data[0]);
                const responseCategory = await axios.get(`${API_URL}/categories/${response.data[0].categoryId}`);
                setCategoryName(responseCategory.data.category.title)
            } catch (error) {
                console.log(error.message);
                return error.message;
            }
        };
        getProduct(productId)
    }, [productId]);

    console.log(product)

    return <MainLayout>
        <div className="container">
            <BreadcrumbsLine breadcrumbs={[{ title: "Main page", url: "/" }, { title: "Categories", url: "/categories" }, { title: categoryName ? categoryName : "Category", url: `/categories/${product?.categoryId}` }]} current={product?.title?.slice(0, 18) + "..."} />
            <Typography mb={5} variant="h2">{product?.title}</Typography>
            <Typography>{product?.title}</Typography>
        </div>
    </MainLayout>
}