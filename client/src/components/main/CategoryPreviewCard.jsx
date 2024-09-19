import { Box, Stack, Typography } from "@mui/material"

export const CategoryPreviewCard = ({ title, img }) => {
    return <Stack direction="column" alignItems="center" gap={2}>
        <Box sx={{
            width: 316,
            height: 350,
            borderRadius: 3,
            backgroundImage: `url(${img})`,
            backgroundSize: "contain"
        }}>
        </Box>
        <Typography>{title}</Typography>
    </Stack>
}