import {IResponse} from "../types/responseType";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService = {
    getAll:():IResponse<IUser[]>=>apiService.get(urls.users.base)
}

export {
    usersService
}