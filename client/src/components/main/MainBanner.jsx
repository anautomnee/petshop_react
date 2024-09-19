import { Box, Button, Typography } from "@mui/material"
import mainBanner from "../../static/mainBanner.jpg"

export const MainBanner = () => {
    return <div>
        <Box sx={{
            backgroundImage: `url(${mainBanner})`,
            color: '#FFFFFF',
            height: 600,
            width: "100%",
            padding: "80px 40px",
            mb: 10
        }}>
            <Typography sx={{ maxWidth: 1200 }} mb={5} variant="h1">Amazing Discounts on Pets Products!</Typography>
            <Button variant="contained" sx={{ padding: "14px 56px" }}>Check out</Button>
        </Box>
    </div>
}