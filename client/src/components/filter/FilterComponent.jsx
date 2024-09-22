import { Stack, Typography } from "@mui/material"
import { FilterCheckbox, FilterInput } from "../../theme/customComponents"
import { FilterSelect } from "./FilterSelect"

const filterOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high"
]

export const FilterComponent = ({ priceFrom, priceTo, handlePriceFilter, handleCheckboxClick }) => {


    return <Stack direction="row" mb={5} gap={2} alignItems="center">
        <Typography>Price</Typography>
        <FilterInput type="number" placeholder="from" value={priceFrom}
            onChange={(e) => handlePriceFilter(e, "from")} />
        <FilterInput type="number" placeholder="to" value={priceTo}
            onChange={(e) => handlePriceFilter(e, "to")} />
        <Typography>Discounted items</Typography>
        <FilterCheckbox type="checkbox" onClick={(e) => handleCheckboxClick(e)} />
        <Typography>Sorted</Typography>
        <FilterSelect options={filterOptions} defaultValue={filterOptions[0]} />
    </Stack>
}