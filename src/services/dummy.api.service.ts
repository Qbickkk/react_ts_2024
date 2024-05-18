import axios, {AxiosResponse} from "axios";
import {ICarts} from "../models/Cart";

const apiService = axios.create({baseURL: "https://dummyjson.com"});

const getAllCarts = ():Promise<AxiosResponse<ICarts>> => {
    return apiService.get('/carts')
}

export { getAllCarts };