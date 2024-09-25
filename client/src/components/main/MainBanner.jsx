import { Box, Button, Typography } from "@mui/material"
import mainBanner from "../../static/mainBanner.jpg"
import { Link } from "react-router-dom"

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
            <Link to="/sales"><Button variant="contained" sx={{ padding: "14px 56px", fontSize: 20 }}>Check out</Button></Link>
        </Box>
    </div>
}