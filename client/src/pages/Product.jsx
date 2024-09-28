import { Box, Button, Stack, Typography } from "@mui/material"
import { MainLayout } from "../layouts/MainLayout"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getDiscount, getQuantity, useBreadcrumbs } from "../utils";
import { SaleBadge } from "../theme/customComponents";
import { ValueControl } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotal } from "../store/cartSlice";
import { API_URL } from "../App";

export const Product = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const { productsInCart } = useSelector(state => state.cart)

    const descriptionRef = useRef(null);
    const dispatch = useDispatch();
    const { productId } = useParams();
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

    useEffect(() => {
        setQuantity(getQuantity(productsInCart, productId))
    }, [productId, productsInCart])

    const readMore = (e) => {
        descriptionRef.current.classList.toggle("description");
        e.target.textContent === "Show less" ? e.target.textContent = "Read more" : e.target.textContent = "Show less";
    }
    useBreadcrumbs()

    return <MainLayout breadcrumbs={true}>
        <div className="container">
            <Stack alignItems="center" direction={{ xxs: "column", xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }} gap={4} mb={10}>
                <Box sx={{
                    width: { xxs: 320, xs: 420, sm: 420, md: 548, lg: 548, xl: 548 },
                    height: { xxs: 320, xs: 414, sm: 414, md: 542, lg: 542, xl: 542 }
                }}>
                    <img style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }} src={`${API_URL}/${product?.image}`} alt={`${product?.title?.slice(0, 18)}...`} />
                </Box>
                <Stack>
                    <Typography mb={5} variant="h3" sx={{ width: { xxs: 320, xs: 420, sm: 420, md: 548, lg: 548, xl: 548 }, }}>{product?.title}</Typography>
                    <Stack direction="row" alignItems="flex-end" mb={4}>
                        {product.discont_price ? <>
                            <Typography variant="h2" mr={4}>${product.discont_price}</Typography>
                            <Typography variant="crossed" sx={{ fontSize: 40 }} mr={2}>${product.price}</Typography>
                            <SaleBadge style={{ position: "static", alignSelf: "flex-start" }}>-{discount}%</SaleBadge>
                        </> : <Typography variant="h2" mr={4}>${product.price}</Typography>}
                    </Stack>
                    <Stack direction={{ xxs: "column", xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }} mb={4} gap={4}>
                        <ValueControl page="product" product={product} quantity={quantity} setQuantity={setQuantity} />
                        <Button variant="contained" disabled={quantity ? false : true} onClick={() => {
                            dispatch(addToCart({ ...product, quantity: quantity }))
                            dispatch(getTotal())
                        }} sx={{ width: 316, height: 58, fontSize: 20 }}>Add to cart</Button>
                    </Stack>
                    <Typography mb={2}>Description</Typography>
                    <Typography sx={{ width: { xxs: 420, xs: 420, sm: 420, md: 548, lg: 548, xl: 548 } }} className="description" ref={descriptionRef} variant="description">{product?.description}</Typography>
                    <Typography onClick={(e) => readMore(e)} mt={4} sx={{ textDecoration: "underline", fontSize: 16, cursor: "pointer" }}>Read more</Typography>
                </Stack>
            </Stack>

        </div>
    </MainLayout>
}