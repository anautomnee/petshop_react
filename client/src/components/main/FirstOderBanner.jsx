import { Box, Stack, Typography } from "@mui/material";
import pets from "../../static/pets_firstOrder.png";
import { OrderForm } from "../OrderForm";

export const FirstOrderBanner = () => {
    return <div className="container">
        <Box sx={{
            backgroundImage: "linear-gradient(261.47deg, #2451C6 32.63%, #0D50FF 98.96%)",
            borderRadius: 4,
            mb: 10
        }}>
            <Typography sx={{ paddingTop: 4, padding: { xxs: "32px 10px 0 10px" } }} color="#FFFFFF" variant="h2" textAlign="center">5% off on the first order</Typography>
            <Stack direction="row" alignItems="flex-end">
                <img src={pets} className="petsBanner" alt="pets" />
                <OrderForm type="main" />
            </Stack>
        </Box>
    </div>
}