import { Button, styled } from "@mui/material";
import checkmark from "../static/checkmark.png"

export const LinkBorderBtn = styled(Button)({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "fit-content",
    minWidth: 140,
    padding: "8px 16px",
    color: "#8B8B8B",
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#dedcdc",
    }
})


export const SaleBadge = styled('div')({
    position: "absolute",
    top: 16,
    right: 16,
    width: 68,
    height: 34,
    backgroundColor: "#0D50FF",
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: 2
})



export const FilterInput = styled('input')({
    border: "1px solid #DDDDDD",
    backgroundColor: "#FFFFFF",
    height: "fit-content",
    width: 112,
    padding: "8px 16px",
    borderRadius: 6,
    fontSize: 16,
    "&::placeholder": {
        color: "#8B8B8B",
    }
})

export const FilterCheckbox = styled('input')({
        appearance: "none",
        width: 34,
        height: 34,
        border: "1px solid #DDDDDD", 
        borderRadius: 8, 
        cursor: "pointer",
        "&:checked": {
            backgroundColor: "#0D50FF",
            borderColor: "#0D50FF",
            position: "relative"
        },
        "&:checked:after": {
            content: `url(${checkmark})`,
            position: "absolute",
            top: 4,
            left: 4,
            width: 5,
            height: 10,
        }
})