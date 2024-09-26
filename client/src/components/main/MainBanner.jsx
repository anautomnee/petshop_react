import { Box, Button, Stack, Typography } from "@mui/material"
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
            <Stack alignItems="center">
                <Typography sx={{ maxWidth: 1200, }} mb={5} variant="h1">Amazing Discounts on Pets Products!</Typography>
                <Link to="/sales"><Button variant="contained" sx={{
                    transform: { xl: "translateX(-490px)", lg: "translateX(-460px)", md: "translateX(-360px)", sm: "translateX(-240px)", xs: "translateX(-120px)", xxs: "translateX(-60px)" },
                    padding: "14px 56px", fontSize: 20
                }}>Check out</Button></Link>
            </Stack>
        </Box>
    </div>
}