import { Box, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const API_URL = "http://localhost:3333"

export const CategoryCard = ({ category }) => {
    return <Box>
        <Link to={`/categories/${category.id}`}>
            <Stack direction="column" alignItems="center" gap={2} >
                <Box sx={{
                    width: 316,
                    height: 350,
                    borderRadius: 3,
                    backgroundImage: `url('${API_URL}${category.image}')`,
                    backgroundSize: "contain",
                    transition: "transform 0.4s",
                    "&:hover": {
                        transform: "scale(1.02)"
                    }
                }}>
                </Box>
                <Typography>{category.title}</Typography>
            </Stack>
        </Link>
    </Box>
}