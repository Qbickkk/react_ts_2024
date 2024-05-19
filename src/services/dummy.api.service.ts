import axios, {AxiosResponse} from "axios";
import {ICarts} from "../models/Cart";
import {IFullProduct} from "../models/Product";

const apiService = axios.create({baseURL: "https://dummyjson.com"});

const getAllCarts = ():Promise<AxiosResponse<ICarts>> => {
    return apiService.get('/carts')
}

const getProductById = (id:number):Promise<AxiosResponse<IFullProduct>> => {
    return apiService.get(`/products/${id}`)
}

export { getAllCarts, getProductById};