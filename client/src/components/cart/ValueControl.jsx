import { Stack, Typography } from "@mui/material"
import { ItemValueControl } from "../../theme/customComponents"
import { useDispatch } from "react-redux"
import { changeQuantity, getTotal, removeFromCart } from "../../store/cartSlice"

export const ValueControl = ({ page, product, quantity, setQuantity }) => {
    const dispatch = useDispatch()
    const handleMinus = () => {
        if (page === "cart") {
            if (quantity >= 1) {
                dispatch(changeQuantity({ ...product, quantity: --quantity }))
                dispatch(getTotal())
            }
            if (quantity === 0) {
                dispatch(removeFromCart(product.id))
                dispatch(getTotal())
            }
        } else {
            if (quantity !== 0) {
                setQuantity(--quantity)
            }
        }
    }
    const handlePlus = () => {
        if (page === "cart") {
            dispatch(changeQuantity({ ...product, quantity: ++quantity }))
            dispatch(getTotal())
        } else {
            setQuantity(++quantity)
        }
    }
    return <Stack direction="row" alignItems="center" justifyContent="center"
        sx={{ position: "relative", width: 200, height: 58, border: "1px solid #DDDDDD", borderRadius: 2, borderLeft: "none", borderRight: "none" }}>
        <ItemValueControl onClick={handleMinus} style={{ left: 0 }}>-</ItemValueControl>
        <ItemValueControl onClick={handlePlus} style={{ right: 0 }}>+</ItemValueControl>
        <Typography>{quantity}</Typography>
    </Stack>
}