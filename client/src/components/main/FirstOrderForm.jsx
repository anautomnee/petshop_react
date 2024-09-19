import { useForm } from "react-hook-form";

export const FirstOrderForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

    return <form className="firstOrderForm" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name", { required: true, minLength: 2 })} />
        {errors.name && <span>Name should be al least two letters long</span>}
        <input type="number" placeholder="Phone number" {...register("phoneNumber", { required: true, minLength: 7 })} />
        {errors.phoneNumber && <span>Phone should be al least seven letters long</span>}
        <input type="email" placeholder="Email" {...register("emailNumber", { required: true })} />
        {errors.emailNumber && <span>Email is required</span>}
        <button type="submit">Get a discount</button>
    </form>
}