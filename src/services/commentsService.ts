import {IResponse} from "../types/responseType";
import {IComment} from "../interfaces/commentInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll:():IResponse<IComment[]>=>apiService.get(urls.comments.base)
}

export {
    commentsService
}