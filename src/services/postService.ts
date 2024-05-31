import {AxiosResponse} from "axios";
import {IPost} from "../interfaces/postInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getPostsByUserId:(userId: string):Promise<AxiosResponse<IPost[]>> =>apiService.get(urls.posts.byUserId(userId))
}

export {
    postService
}