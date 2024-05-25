import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/postValidator";
import {postService} from "../services/postService";

export interface IPost {
    userId: number
    title: string
    body: string
}


const FormComponent = () => {

    const {register,handleSubmit,formState:{errors,isValid},reset} = useForm<IPost>({
        mode:"all",
        resolver: joiResolver(postValidator)
    });

    const savePost = (post:IPost) => {
        postService.POST(post).then((data) => {
            console.log(data)
        })
        reset()
    };

    return (
        <form onSubmit={handleSubmit(savePost)}>
            <label>UserID: <input type='number' placeholder='Enter UserID' {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}
            </label>
            <br/>
            <label>Title: <input type='text' placeholder='Enter Title' {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
            </label>
            <br/>
            <label>Body: <input type='text' placeholder='Enter Body' {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
            </label>
            <br/>
            <br/>
            <button disabled={!isValid}>Save</button>
            <hr/>
        </form>
    );
};

export {FormComponent};