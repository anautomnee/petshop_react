import { Stack, Typography } from "@mui/material"
import { ItemValueControl } from "../../theme/customComponents"

export const ValueControl = () => {
    return <Stack direction="row" alignItems="center" justifyContent="center"
        sx={{ position: "relative", width: 200, height: 58, border: "1px solid #DDDDDD", borderRadius: 8 }}>
        <ItemValueControl style={{ left: 0 }}>-</ItemValueControl>
        <ItemValueControl style={{ right: 0 }}>+</ItemValueControl>
        <Typography>1</Typography>
    </Stack>
}