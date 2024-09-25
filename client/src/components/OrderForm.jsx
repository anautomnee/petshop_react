import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendFormData, sendOrderData } from "../store/actionCreators";
import { Typography } from "@mui/material";

export const OrderForm = ({ type, handleClickOpen }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (type === "main") {
            dispatch(sendFormData(data));
        } else {
            dispatch(sendOrderData(data));
        }
        if (handleClickOpen) {
            handleClickOpen()
        }
    };

    return <form className={type === "main" ? "firstOrderForm" : "cartForm"} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 2 })} />
        {errors.name && <Typography fontSize={14} color="#FFFFFF">Name should be al least two letters long</Typography>}
        <input type="number" placeholder="Phone number" {...register("phoneNumber", { required: true, minLength: 7 })} />
        {errors.phoneNumber && <Typography fontSize={14} color="#FFFFFF">Phone should be al least seven letters long</Typography>}
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <Typography fontSize={14} color="#FFFFFF">Email is required</Typography>}
        <button type="submit">{type === "main" ? "Get a discount" : "Order"}</button>
    </form>
}