import { useContext } from "react"
import { Link } from "react-router-dom"
import { Box, Stack } from "@mui/material"
import { LinkBorderBtn } from "../../theme/customComponents"
import { BreadcrumbsContext } from "../../context/breadcrumbsContext"

export const BreadcrumbsLine = () => {
    const { crumbs } = useContext(BreadcrumbsContext)
    return (
        <Stack className="container" direction="row" alignItems="center" mt={5} mb={5} sx={{ flexWrap: 'wrap' }} rowGap={2}>
            {crumbs.map((breadcrumb, ind) =>
                !(ind === crumbs.length - 1) ?
                    <Stack direction="row" alignItems="center" key={ind}>
                        <Link underline="hover" color="inherit" to={breadcrumb.url}>
                            <LinkBorderBtn sx={{ color: ind === crumbs.length - 1 ? "#282828" : "#8B8B8B" }}>{breadcrumb.title}</LinkBorderBtn>
                        </Link>
                        {!(ind === crumbs.length - 1) && <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 16 }} />}
                    </Stack> :
                    <LinkBorderBtn key={ind} sx={{ color: "#282828", cursor: "auto", "&:hover": { backgroundColor: "#FFFFFF" } }}>{breadcrumb.title}</LinkBorderBtn>
            )}
        </Stack>)
}