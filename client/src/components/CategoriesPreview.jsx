import { Box, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";

const AllCategoriesBtn = styled('button')({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "fit-content",
    minWidth: 140,
    padding: "8px 16px",
    color: "#8B8B8B",
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer"
})

export const CategoriesPreview = () => {
    const { categories } = useSelector(state => state.categories)
    return <Container>
        <Stack direction="row" alignItems="center" mb={5}>
            <Typography mr={4} variant="h2">Categories</Typography>
            <Box sx={{ borderBottom: "1px solid #DDDDDD", width: 832 }} />
            <AllCategoriesBtn>All categories</AllCategoriesBtn>
        </Stack>
        <Stack>{categories.map(category => <Typography>{category.title}</Typography>)}</Stack>
    </Container>
}