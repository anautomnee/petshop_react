import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material"


export const FooterCard = ({ title, body, type }) => {
    const theme = useTheme();
    return <Box sx={{
        width: type === "lg" ? 780 : 548,
        backgroundColor: theme.palette.extra.main,
        padding: 4,
        borderRadius: 3
    }}>
        <Stack direction="column">
            <Typography mb={1}>{title}</Typography>
            <Typography variant="h2">{body}</Typography>
        </Stack>
    </Box >
}