import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { LinkBorderBtn } from "../../theme/customComponents"

export const BreadcrumbsLine = ({ breadcrumbs, current }) => {
    return <Stack direction="row" alignItems="center" mt={5} mb={5}>
        {breadcrumbs.map((breadcrumb, ind) =>
            <Stack direction="row" alignItems="center" key={ind}>
                <Link underline="hover" color="inherit" to={breadcrumb.url}>
                    <LinkBorderBtn>{breadcrumb.title}</LinkBorderBtn>
                </Link>
                <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 16 }} />
            </Stack>
        )}
        <Typography><LinkBorderBtn sx={{ color: "#282828", cursor: "auto" }}>{current}</LinkBorderBtn></Typography>
    </Stack>
}