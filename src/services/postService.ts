import {IRes} from "../types/responseType";
import {IPost} from "../interfaces/postInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getByUserId:(id:string):IRes<IPost[]> => apiService.get(urls.posts.byUserId(id))
}

export {
    postService
}