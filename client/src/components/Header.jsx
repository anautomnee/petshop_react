import { Badge, Container, Stack, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export const Header = () => {
    return <Container>
        <Toolbar>
            <Stack mb={3} mt={3} direction="row" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                <NavLink to="/">
                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingTop: 8 }}>
                        <circle cx="35" cy="35" r="35" fill="#0D50FF" />
                        <path d="M33.4445 21.0557H37.5557M49.8891 35.4447C48.5187 46.4077 45.0927 51.8892 39.6112 51.8892H31.3889C25.9074 51.8892 22.4815 46.4077 21.1111 35.4447" stroke="white" strokeWidth="4.11114" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.4999 47.778V51.8891M31.3887 33.389V33.4096M39.611 33.389V33.4096M33.4443 43.6669C33.4443 45.0372 34.1295 45.7224 35.4999 45.7224C37.5554 45.7224 37.5554 45.0379 37.5554 43.6669H33.4443ZM21.1109 19L33.4443 20.9939L20.6216 34.7416C20.2617 35.1469 19.7588 35.397 19.2184 35.4396C18.6781 35.4821 18.1422 35.3137 17.7233 34.9697C17.4385 34.7389 17.2244 34.4326 17.1055 34.0858C16.9866 33.739 16.9678 33.3657 17.0511 33.0087L21.1109 19ZM49.8889 19L37.5554 20.9939L50.3781 34.7416C51.114 35.5802 52.4111 35.683 53.2764 34.9697C53.5613 34.7389 53.7754 34.4326 53.8942 34.0858C54.0131 33.739 54.0319 33.3657 53.9486 33.0087L49.8889 19Z" stroke="white" strokeWidth="4.11114" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavLink>

                <Stack direction="row" gap={4}>
                    <NavLink to="/"><Typography>Main page</Typography></NavLink>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/products">All products</NavLink>
                    <NavLink to="/sales">All sales</NavLink>
                </Stack>

                <NavLink to="/cart">
                    <Badge badgeContent={4} color="primary">
                        <LocalMallOutlinedIcon fontSize="large" color="primary" />
                    </Badge>
                </NavLink>
            </Stack>
        </Toolbar>
    </Container >
}