import {AxiosResponse} from "axios";

import {IUsers} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const userService = {
    getAll:():Promise<AxiosResponse<IUsers>> => apiService.get(urls.users.base)
}

export {
    userService
}