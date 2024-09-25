import { Box, Button, Stack, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getDiscount, useBreadcrumbs } from "../utils";
import { SaleBadge } from "../theme/customComponents";
import { ValueControl } from "../components";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/productsSlice";

export const Product = () => {
    const [product, setProduct] = useState({});
    const descriptionRef = useRef(null);
    const dispatch = useDispatch();
    const { productId } = useParams();
    const API_URL = "http://localhost:3333";
    const discount = getDiscount(product?.price, product?.discont_price);

    useEffect(() => {
        async function getProduct(id) {
            try {
                const response = await axios.get(`${API_URL}/products/${id}`);
                setProduct(response.data[0]);
            } catch (error) {
                console.log(error.message);
                return error.message;
            }
        };
        getProduct(productId)
    }, [productId]);

    const readMore = (e) => {
        descriptionRef.current.classList.toggle("description");
        e.target.textContent === "Show less" ? e.target.textContent = "Read more" : e.target.textContent = "Show less";
    }
    useBreadcrumbs()

    return <MainLayout breadcrumbs={true}>
        <div className="container">
            <Stack direction="row" gap={4} mb={10}>
                <Box sx={{ width: 548, height: 542 }}>
                    <img style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }} src={`${API_URL}/${product?.image}`} alt={`${product?.title?.slice(0, 18)}...`} />
                </Box>
                <Stack>
                    <Typography mb={5} variant="h3" sx={{ maxWidth: 548 }}>{product?.title}</Typography>
                    <Stack direction="row" alignItems="flex-end" mb={4}>
                        {product.discont_price ? <>
                            <Typography variant="h2" mr={4}>${product.discont_price}</Typography>
                            <Typography variant="crossed" sx={{ fontSize: 40 }} mr={2}>${product.price}</Typography>
                            <SaleBadge style={{ position: "static", alignSelf: "flex-start" }}>-{discount}%</SaleBadge>
                        </> : <Typography variant="h2" mr={4}>${product.price}</Typography>}
                    </Stack>
                    <Stack direction="row" alignItems="center" justifyContent="center" mb={4}>
                        <ValueControl />
                        <Button variant="contained" onClick={() => dispatch(addToCart(product))} sx={{ width: 316, height: 58, ml: 4, fontSize: 20 }}>Add to cart</Button>
                    </Stack>
                    <Typography mb={2}>Description</Typography>
                    <Typography className="description" ref={descriptionRef} variant="description">{product?.description}</Typography>
                    <Typography onClick={(e) => readMore(e)} mt={4} sx={{ textDecoration: "underline", fontSize: 16, cursor: "pointer" }}>Read more</Typography>
                </Stack>
            </Stack>

        </div>
    </MainLayout>
}