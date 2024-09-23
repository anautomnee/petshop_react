import { Stack, Typography } from "@mui/material"
import { FilterCheckbox, FilterInput } from "../../theme/customComponents"
import { FilterSelect } from "./FilterSelect"
import { useDispatch } from "react-redux"
import { changePriceFrom, changePriceTo, changeSale, changeSorted } from "../../store/filterSlice"

const filterOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high"
]

export const FilterComponent = () => {
    const dispatch = useDispatch()

    return <Stack direction="row" mb={5} gap={2} alignItems="center">
        <Typography>Price</Typography>
        <FilterInput type="number" placeholder="from"
            onChange={(e) => dispatch(changePriceFrom(e.target.value))} />
        <FilterInput type="number" placeholder="to"
            onChange={(e) => dispatch(changePriceTo(e.target.value))} />
        <Typography>Discounted items</Typography>
        <FilterCheckbox type="checkbox" onClick={e => dispatch(changeSale(e.target.checked))} /> {/*onClick={(e) => handleCheckboxClick(e)}*/}
        <Typography>Sorted</Typography>
        <FilterSelect options={filterOptions} defaultValue={filterOptions[0]} handleSelect={(selected) => dispatch(changeSorted(selected))} />
    </Stack>
}