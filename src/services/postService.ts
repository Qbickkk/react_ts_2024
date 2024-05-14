import {AxiosResponse} from "axios";

import {IPosts} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getByUserId:(userId:number):Promise<AxiosResponse<IPosts>> => apiService.get(urls.posts.byId(userId))
}

export {postService}