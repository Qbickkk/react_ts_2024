import {apiService} from "./apiService";
import {IPost} from "../components/FormComponent";
import {AxiosResponse} from "axios";

const postService = {
    POST: (data: IPost):Promise<AxiosResponse<IPost>> => apiService.post('/posts', data),
}

export {
    postService
}

