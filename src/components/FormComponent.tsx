import {FC} from "react";
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string
    age: number
    password: string
}


const FormComponent:FC = () => {

    const {register, handleSubmit,formState:{errors}} = useForm<IFormProps>();

    const handler = (data:IFormProps) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handler)}>
            <input type="text"  {...register('username', {
                required: {value: true, message: 'this field is required'},
                maxLength: {value: 10, message: 'max length is 10 characters'}
            })}/>
            {errors.username && <span>{errors.username.message}</span>}
            <br/>
            <input type="number" {...register('age')}/>
            <br/>
            <input type="text" {...register('password')}/>
            <br/>
            <button>Save</button>
        </form>
    );
};

export {FormComponent};