import {FC} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/userValidator";

interface IFormProps {
    username: string
    age: number
    password: string
}


const FormComponent:FC = () => {

    const {register, handleSubmit,formState:{errors, isValid}} = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const handler = (data:IFormProps) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handler)}>
            <input type="text"  {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <br/>
            <input type="number" {...register('age')}/>
            {errors.age && <span>{errors.age.message}</span>}
            <br/>
            <input type="text" {...register('password')}/>
            <br/>
            <button>Save</button>
        </form>
    );
};

export {FormComponent};