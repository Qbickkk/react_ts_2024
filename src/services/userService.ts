import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/responseType";

const userService = {
    getAll:():IRes<IUser[]> => apiService.get(urls.users.base)
}

export {
    userService
}