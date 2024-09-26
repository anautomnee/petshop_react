import { Stack, Typography } from "@mui/material"
import { FilterCheckbox, FilterInput, LinkBorderBtn } from "../../theme/customComponents"
import { FilterSelect } from "./FilterSelect"
import { useDispatch, useSelector } from "react-redux"
import { changePriceFrom, changePriceTo, changeSale, changeSorted } from "../../store/filterSlice"
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';
import { useState } from "react"

const filterOptions = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high"
]

export const FilterComponent = ({ sales = false }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch()
    const filterObject = useSelector(state => state.filter)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <>
        <LinkBorderBtn onClick={handleClick} startIcon={<FilterListIcon />} sx={{ display: { xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex", xxs: "flex" }, mb: 5 }}>Filter</LinkBorderBtn>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Stack gap={2} sx={{ padding: 3 }}>
                <Stack direction="row" gap={2}>
                    <Typography>Price</Typography>
                    <FilterInput type="number" placeholder="from" value={filterObject.priceFrom}
                        onChange={(e) => dispatch(changePriceFrom(e.target.value))} />
                    <FilterInput type="number" placeholder="to" value={filterObject.priceTo}
                        onChange={(e) => dispatch(changePriceTo(e.target.value))} />
                </Stack>
                {!sales && <Stack direction="row" gap={2}>
                    <Typography>Discounted items</Typography>
                    <FilterCheckbox type="checkbox" checked={filterObject.sale} onChange={e => dispatch(changeSale(e.target.checked))} />
                </Stack>}
                <Stack direction="row" gap={2}>
                    <Typography>Sorted</Typography>
                    <FilterSelect options={filterOptions} defaultValue={filterOptions[0]} handleSelect={(selected) => dispatch(changeSorted(selected))} />
                </Stack>
            </Stack>
        </Popover>
        <Stack direction="row" sx={{ display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none", xxs: "none" } }} mb={5} gap={2} alignItems="center">
            <Typography>Price</Typography>
            <FilterInput type="number" placeholder="from" value={filterObject.priceFrom}
                onChange={(e) => dispatch(changePriceFrom(e.target.value))} />
            <FilterInput type="number" placeholder="to" value={filterObject.priceTo}
                onChange={(e) => dispatch(changePriceTo(e.target.value))} />
            {!sales && <>
                <Typography>Discounted items</Typography>
                <FilterCheckbox type="checkbox" checked={filterObject.sale || false} onChange={e => dispatch(changeSale(e.target.checked))} />
            </>}
            <Typography>Sorted</Typography>
            <FilterSelect options={filterOptions} defaultValue={filterOptions[0]} handleSelect={(selected) => dispatch(changeSorted(selected))} />
        </Stack>
    </>

}