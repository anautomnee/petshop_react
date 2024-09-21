import CloseIcon from "@mui/icons-material/Close"
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Stack } from "@mui/material"

export const DialogComponent = ({ open, setOpen }) => {
    return <Dialog open={open}>
        <Stack direction="row" justifyContent="space-between">
            <DialogTitle sx={{ fontSize: 40, fontWeight: 800, padding: "0 16px", lineHeight: "3rem" }}>Congratulations!</DialogTitle>
            <IconButton aria-label="close" onClick={() => setOpen(false)}>
                <CloseIcon sx={{ color: '#FFFFFF' }} fontSize="large" />
            </IconButton>
        </Stack>
        <DialogContent>
            <Typography mb={2}>Your order has been successfully placed on the website.</Typography>
            <Typography>A manager will contact you shortly to confirm your order.</Typography>
        </DialogContent>
    </Dialog>
}