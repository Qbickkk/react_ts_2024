import {IResponse} from "../types/responseType";
import {IPost} from "../interfaces/postInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getAll:():IResponse<IPost[]>=>apiService.get(urls.posts.base)
}

export {
    postsService
}