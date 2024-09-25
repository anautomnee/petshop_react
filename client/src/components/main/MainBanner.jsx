import { Box, Button, Typography } from "@mui/material"
import mainBanner from "../../static/mainBanner.jpg"
import { Link } from "react-router-dom"

export const MainBanner = () => {
    return <div>
        <Box sx={{
            backgroundImage: `url(${mainBanner})`,
            color: '#FFFFFF',
            height: { lg: 600, md: 520, sm: 440 },
            width: "100wv",
            padding: "80px 40px",
            mb: 10,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center"
        }}>
            <Typography sx={{ maxWidth: 1200, paddingLeft: { lg: 5, xl: 20 } }} mb={5} variant="h1">Amazing Discounts on Pets Products!</Typography>
            <Link style={{ paddingLeft: { lg: 5, xl: 8 } }} to="/sales"><Button variant="contained" sx={{ padding: "14px 56px", fontSize: 20 }}>Check out</Button></Link>
        </Box>
    </div>
}