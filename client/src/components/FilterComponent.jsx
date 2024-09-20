import { Stack, Typography } from "@mui/material"

export const FilterComponent = () => {
    return <Stack direction="row" mb={5}>
        <Typography>Price</Typography>
        <Typography>Discounted items</Typography>
        <Typography>Sorted</Typography>
    </Stack>
}