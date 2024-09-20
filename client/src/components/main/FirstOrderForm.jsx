import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendFormData } from "../../store/actionCreators";

export const FirstOrderForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data)
        dispatch(sendFormData(data));
    };

    return <form className="firstOrderForm" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 2 })} />
        {errors.name && <span>Name should be al least two letters long</span>}
        <input type="number" placeholder="Phone number" {...register("phoneNumber", { required: true, minLength: 7 })} />
        {errors.phoneNumber && <span>Phone should be al least seven letters long</span>}
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}
        <button type="submit">Get a discount</button>
    </form>
}