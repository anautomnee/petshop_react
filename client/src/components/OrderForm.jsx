import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendFormData, sendOrderData } from "../store/actionCreators";
import { Snackbar, Typography } from "@mui/material";
import { useState } from "react";

export const OrderForm = ({ type, handleClickOpen }) => {

    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (type === "main") {
            dispatch(sendFormData(data));
            setOpen(true)
        } else {
            dispatch(sendOrderData(data));
        }
        if (handleClickOpen) {
            handleClickOpen()
        }
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return <form className={type === "main" ? "firstOrderForm" : "cartForm"} onSubmit={handleSubmit(onSubmit)}>
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Discount achieved"
            anchorOrigin={{ vertical: 'bottom', horizontal: "right" }}
        />
        <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 2 })} />
        {errors.name && <Typography fontSize={14} color={type === "main" ? "#FFFFFF" : "#0D50FF"}>Name should be al least two letters long</Typography>}
        <input type="number" placeholder="Phone number" {...register("phoneNumber", { required: true, minLength: 7 })} />
        {errors.phoneNumber && <Typography fontSize={14} color={type === "main" ? "#FFFFFF" : "#0D50FF"}>Phone should be al least seven letters long</Typography>}
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <Typography fontSize={14} color={type === "main" ? "#FFFFFF" : "#0D50FF"}>Email is required</Typography>}
        <button type="submit">{type === "main" ? "Get a discount" : "Order"}</button>
    </form>
}