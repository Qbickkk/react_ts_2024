import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll:():Promise<AxiosResponse<IUser[]>> => apiService.get(urls.users.base),
    getById:(id:string):Promise<AxiosResponse<IUser>> => apiService.get(urls.users.byId(id)),
}

export {
    userService
}