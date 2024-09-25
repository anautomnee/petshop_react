import { Stack, Typography } from "@mui/material"
import { FilterCheckbox, FilterInput } from "../../theme/customComponents"
import { FilterSelect } from "./FilterSelect"
import { useDispatch, useSelector } from "react-redux"
import { changePriceFrom, changePriceTo, changeSale, changeSorted } from "../../store/filterSlice"

const filterOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high"
]

export const FilterComponent = ({ sales = false }) => {
    const dispatch = useDispatch()
    const filterObject = useSelector(state => state.filter)

    return <Stack direction="row" mb={5} gap={2} alignItems="center">
        <Typography>Price</Typography>
        <FilterInput type="number" placeholder="from" value={filterObject.priceFrom}
            onChange={(e) => dispatch(changePriceFrom(e.target.value))} />
        <FilterInput type="number" placeholder="to" value={filterObject.priceTo}
            onChange={(e) => dispatch(changePriceTo(e.target.value))} />
        {!sales && <>
            <Typography>Discounted items</Typography>
            <FilterCheckbox type="checkbox" checked={filterObject.sale} onClick={e => dispatch(changeSale(e.target.checked))} />
        </>}
        <Typography>Sorted</Typography>
        <FilterSelect options={filterOptions} defaultValue={filterOptions[0]} handleSelect={(selected) => dispatch(changeSorted(selected))} />
    </Stack>
}