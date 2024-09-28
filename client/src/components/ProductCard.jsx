import { Box, Button, Snackbar, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { SaleBadge } from "../theme/customComponents"
import { getDiscount, getQuantity } from "../utils"
import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/cartSlice"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { API_URL } from "../App"

export const ProductCard = ({ page, product }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const dispatch = useDispatch();
    const discount = getDiscount(product?.price, product?.discont_price);
    const addBtnRef = useRef(null);
    const { productsInCart } = useSelector(state => state.cart)

    const handleClick = () => {
        setSnackbarOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return <div>
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={handleClose}
            message="Added to the cart"
            action={action}
        />
        <Box sx={{
            position: "relative",
            borderRadius: 3,
            width: 316,
            height: 422,
            border: "1px solid #DDDDDD",
            transition: "transform 0.4s",
            "&:hover": {
                transform: "scale(1.02)"
            }
        }}
            onMouseOver={() => addBtnRef.current.style.display = "block"}
            onMouseLeave={() => addBtnRef.current.style.display = "none"}
        >
            <Button variant="contained" ref={addBtnRef} hidden
                onClick={() => {
                    handleClick();
                    let quantity = getQuantity(productsInCart, product.id)
                    dispatch(addToCart({ ...product, quantity: ++quantity }))
                }}
                sx={{
                    display: "none",
                    position: "absolute",
                    top: 210,
                    right: 16,
                    zIndex: 5,
                    width: 284,
                    height: 58,
                    "&:hover": {
                        backgroundColor: "#282828"
                    }
                }}>
                <Typography>Add to cart</Typography></Button>
            <Link to={page === "sale" ? `/sales/${product.id}` : (page === "products" ? `/products/${product.id}` : `/categories/${page}/${product.id}`)}>
                <Stack direction="column" gap={2} sx={{ position: "relative" }}>
                    {product.discont_price && <SaleBadge>-{discount}%</SaleBadge>}
                    <Box sx={{
                        width: 314,
                        height: 284,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        backgroundImage: `url('${API_URL}/${product.image}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: "center",
                        backgroundPositionY: "center",
                        borderBottom: "1px solid #DDDDDD",
                    }}>
                    </Box>
                    <Typography className="shortenText" sx={{ paddingLeft: 4 }}>{product.title}</Typography>
                    <Stack direction="row" alignItems="flex-end" gap={2} sx={{ paddingLeft: 4 }}>
                        {product.discont_price ? <>
                            <Typography variant="h3">${product.discont_price}</Typography>
                            <Typography variant="crossed">${product.price}</Typography>
                        </> : <Typography variant="h3">${product.price}</Typography>}
                    </Stack>
                </Stack>
            </Link>
        </Box>
    </div>


}