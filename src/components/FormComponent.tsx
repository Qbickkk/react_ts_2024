import {FC} from "react";
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string
    age: number
    password: string
}


const FormComponent:FC = () => {

    const {register, handleSubmit} = useForm<IFormProps>();

    const handler = (data:IFormProps) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handler)}>
            <input type="text"  {...register('username')}/>
            <input type="number" {...register('age')}/>
            <input type="text" {...register('password')}/>
            <button>Save</button>
        </form>
    );
};

export {FormComponent};