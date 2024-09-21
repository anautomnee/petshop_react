import { Box, Stack, Typography, useTheme } from "@mui/material"
import { OrderForm } from "../OrderForm"

export const OrderDetails = ({ items, total, handleClickOpen }) => {
    const theme = useTheme()
    return <Box sx={{ backgroundColor: theme.palette.extra.main, borderRadius: 3, padding: 4 }}>
        <Typography variant="h3" mb={3}>Order details</Typography>
        <Typography variant="h3" fontWeight={500} color={theme.palette.order.main}>{items} items</Typography>
        <Stack direction="row" mb={4} justifyContent="space-between" alignItems="flex-end">
            <Typography variant="h3" fontWeight={500} color={theme.palette.order.main}>Total</Typography>
            <Typography variant="h2">${total}</Typography>
        </Stack>
        <OrderForm type="cart" handleClickOpen={handleClickOpen} />
    </Box>
}